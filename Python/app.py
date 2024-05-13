from flask import Flask, request, jsonify
from bson import json_util  # Import json_util from bson
import json
from yt import filter_url, download_video
from mongo import database_check, retrive_data, addData
from audio import transcribed
from huggingface_hub import hf_hub_download
from whisper import load_model

model_path = hf_hub_download(repo_id="distil-whisper/distil-large-v3-openai", filename="model.bin")
model = load_model(model_path)

app = Flask(__name__)

@app.route('/transcribe', methods=['POST'])
def handle_youtube_request():
    datas = request.get_json()
    url = datas.get('url')
    id = filter_url(url)
    if database_check(id) == "true":
        # Retrieve data and convert to standard Python dictionary
        data = retrive_data(id)
        return json.loads(json_util.dumps(data))

    else:
        path = download_video(url)
        transcribe = transcribed(path, model_path, model, id)
        listdir = [transcribe]
        addData(listdir)
        return json.loads(json_util.dumps(listdir))

if __name__ == '__main__':
    app.run(debug=True)
