import requests

url = ""

payload = {
    "input": {
        "audio": "https://bot.heavensml.workers.dev/0:/David%20Goggins%EF%BC%9A%20How%20to%20Build%20Immense%20Inner%20Strength%20%5BnDLb8_wgX50%5D.mp3",
        "model": "base",
        "transcription": "plain_text",
        "translate": False,
        "language": "en",
        "temperature": 0,
        "best_of": 5,
        "beam_size": 5,
        "patience": 1,
        "suppress_tokens": "-1",
        "condition_on_previous_text": False,
        "temperature_increment_on_fallback": 0.2,
        "compression_ratio_threshold": 2.4,
        "logprob_threshold": -1,
        "no_speech_threshold": 0.6,
        "word_timestamps": False
    },
    "enable_vad": False
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": ""
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)