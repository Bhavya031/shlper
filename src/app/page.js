
import Navbar from "./components/Navbar";

import Profile from "./components/Element/Profile";

const Home = () => {
  return (

    <div>
	  <Navbar />
      <video src="./BG.mp4" autoPlay loop muted style={{ width: '100%', height: '100%' }} />
    </div>

  );
};

export default Home;
