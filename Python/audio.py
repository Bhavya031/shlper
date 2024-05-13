from huggingface_hub import hf_hub_download
from whisper import load_model, transcribe
import json


def transcribed(filename, model_path , model):
    
    pred_out = transcribe(model, audio=filename, language="en", word_timestamps=True)


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
        pred_out.update({"timestamp":output_str})
    return pred_out
