from flask import Flask, request
from yt import filter_url, download_video
from mongo import database_check, retrive_data
app = Flask(__name__)

@app.route('/transcribe', methods=['POST'])
def handle_youtube_request():
    url = request.form.get('url')
    id = filter_url(url)
    if database_check(id):
        return retrive_data(id)
    else:
        download_video([url])
    return {"id": id}

if __name__ == '__main__':
    app.run(debug=True)
