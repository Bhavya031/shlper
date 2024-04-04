"use client";
import { Image } from "@nextui-org/image";
import YouTube from "react-youtube";
import "../../../../styles/globals.css";
import { Textarea } from "@nextui-org/react";


export default function youtube({ params }) {   

  let videoId = "https://youtu.be/oWUQQD97Rz0";
  return (
    <div className="dark text-foreground bg-background p-4 flex">
      <div className="w-1/2 h-screen">
        <div className="p-4">
        <iframe
          src="https://www.youtube.com/embed/r9jwGansp1E"
          frameBorder="0"
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
            
        </iframe>
        </div>
        <div className="p-4">
        <Textarea
          isReadOnly
          label="Transcription"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your description"
          size="lg"
          defaultValue="To achieve your desired functionality in a Next.js project where you have subtitles linked to specific timestamps in a YouTube video, you can use a combination of tools and libraries. Here's a suggested approach:

      Next.js: Utilize Next.js for building your React application. It provides server-side rendering, routing, and other features that are beneficial for building web applications.
      
      "
          className="h-screen"  
        />
    </div>
      </div>

    </div>
  );
}
