from flask import Flask, request
from yt import filter_url, download_video
from mongo import database_check, retrive_data
from audio import transcribed
from huggingface_hub import hf_hub_download
from whisper import load_model
model_path = hf_hub_download(repo_id="distil-whisper/distil-large-v3-openai", filename="model.bin")
model = load_model(model_path)

app = Flask(__name__)

@app.route('/transcribe', methods=['POST'])
def handle_youtube_request():
    url = request.form.get('url')
    id = filter_url(url)
    if database_check(id)=="True":
        return retrive_data(id)
    else:
        path = download_video(url)
        transcribe = transcribed(path, model_path, model) 
        return transcribe

if __name__ == '__main__':
    app.run(debug=True)