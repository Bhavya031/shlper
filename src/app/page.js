import Navbar from "./navbar";
import { AuthOptions, authOptions } from "./lib/nextAuth";
import { getServerSession } from "next-auth";
import HeroSection from "./HeroSection";
const Home = async () => {
  const session = await getServerSession();

  return session ? (
    <>
      <Navbar />
      <HeroSection> </HeroSection>
    </>
  ) : (
    <div>
      <Navbar />
      <video src={'Bg.mp4'} autoPlay loop style={{ height: "100%", width: "100%" }}/>
    </div>
  );

};
export default Home;
