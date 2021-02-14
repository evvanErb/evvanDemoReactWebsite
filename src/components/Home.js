import Splashpage from "./Splashpage"
import About from "./About"
import Skills from "./Skills"
import Experience from "./Experience"

function Home() {
  return (
    <div className="Home">
        <Splashpage />
        <About />
        <Skills />
        <Experience />
    </div>
  );
}

export default Home;
