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
      <video autoPlay muted loop style={{ height: "100%", width: "100%" }}>
      <source src={'/BG/Bg.mp4'} type="video/mp4" />
      </video>
    </div>
  );

};
export default Home;
