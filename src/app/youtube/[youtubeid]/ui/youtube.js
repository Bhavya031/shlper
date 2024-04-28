"use client";
import { Image } from "@nextui-org/image";
import YouTube from "react-youtube";
import "../../../../../styles/globals.css";
import { Textarea } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import response from "../../../../../Python/response.json"
export default function Youtubes({ params }) {
  let srt= response["output"]["transcription"];

  return (
    <div className="w-1/2">
      <div className="p-4">
        <iframe
          src={"https://www.youtube.com/embed/" + params.youtubeid  + "?start="}
          frameBorder="0"
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">

        <Textarea
          maxRows={18}
          label="Transcription"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your description"
          size="lg"
          defaultValue={srt}
        />
      </div>
    </div>
  );
}