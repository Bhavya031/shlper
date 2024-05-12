from fastapi import APIRouter, HTTPException
from mongo import database_check
from yt_dlp import filter_url, download_video
from audio import transcribe

router = APIRouter()

@router.get("/filter-url/{url}")
def filter_url_endpoint(url: str):
    try:
        video_id = filter_url(url)
        return {"video_id": video_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/check-video/{video_id}")
def check_video_endpoint(video_id: str):
    try:
        result = database_check(video_id)
        return {"exists_in_db": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/download-video")
def download_video_endpoint(url: str):
    try:
        download_video([url])
        return {"message": "Video downloaded successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/transcribe-audio")
def transcribe_audio_endpoint(filename: str):
    try:
        transcription = transcribe(filename)
        return transcription
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
