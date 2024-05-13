from huggingface_hub import hf_hub_download
from whisper import load_model, transcribe


def transcribe(filename):
    
    model_path = hf_hub_download(repo_id="distil-whisper/distil-large-v3-openai", filename="model.bin")
    model = load_model(model_path)
    sample =filename
    pred_out = transcribe(model, audio=sample, language="en", word_timestamps=True)


    output_str = ""

    for i, segment in enumerate(pred_out["segments"], start=1):
        start_time = "{:02d}:{:02d}:{:02d},{:03d}".format(
            int(segment["start"] // 3600),
            int((segment["start"] % 3600) // 60),
            int(segment["start"] % 60),
            int((segment["start"] % 1) * 1000)
        )
        end_time = "{:02d}:{:02d}:{:02d},{:03d}".format(
            int(segment["end"] // 3600),
            int((segment["end"] % 3600) // 60),
            int(segment["end"] % 60),
            int((segment["end"] % 1) * 1000)
        )
        output_str += "%d\n%s --> %s\n%s\n" % (i, start_time, end_time, segment["text"].strip())   
    return {pred_out["text"], output_str}
