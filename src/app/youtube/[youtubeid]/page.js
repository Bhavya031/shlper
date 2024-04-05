import Navbar from "../../navbar";
import Youtubes from "./ui/youtube";
import ChatInput from "../../components/Element/ChatInput"
export default function youtube({ params }) {
  return (
    <>
      <Navbar />

      <div className="dark text-foreground bg-background p-4 flex">
        <Youtubes params={params}/>
        <div className="relative w-1/2 m-4 h-screen border-2 rounded-md dark text-foreground bg-background border-zinc-700">
        <ChatInput></ChatInput>
        </div>
      </div>
    </>
  );
}
