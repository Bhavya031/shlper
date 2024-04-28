import Navbar from "../../navbar";
import Youtubes from "./ui/youtube";
import ChatInput from "../../components/Element/ChatInput"
export default function youtube({ params }) {
  return (
      <div className="dark text-foreground bg-background h-screen">
      <Navbar />

      <div className="dark text-foreground bg-background p-4 flex">
        <Youtubes params={params}/>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
}
