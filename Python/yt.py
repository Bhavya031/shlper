import json
import yt_dlp

def filter_url(URL):
    

    ydl_opts = {}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(URL, download=False)
        id = ydl.sanitize_info(info)['id']
        # ℹ️ ydl.sanitize_info makes the info json-serializable
        return(id)
def download_video(URLS):


    ydl_opts = {
        'format': 'm4a/bestaudio/best',
        'outtmpl': './audio/%(title)s [%(id)s].%(ext)s',
        # ℹ️ See help(yt_dlp.postprocessor) for a list of available Postprocessors and their arguments
        'postprocessors': [{  # Extract audio using ffmpeg
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'm4a',
        }]
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        error_code = ydl.download(URLS)
        info = ydl.extract_info(URLS)
        filename = "audio/" + info["title"] + " [" + info["id"] + "].m4a"
    return filename