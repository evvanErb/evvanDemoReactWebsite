import NavBar from "./NavBar"
import Splashpage from "./Splashpage"
import About from "./About"

function Home() {
  return (
    <div className="Home">
        <Splashpage />
        <About />
    </div>
  );
}

export default Home;
