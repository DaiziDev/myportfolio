import { FaBeer } from "react-icons/fa"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Work from "./Components/My Work/Work"
import Contact from "./Components/Contact Me/Contact"

function App() {

  return (
    <div>
      {/* Hello React <FaBeer /> */}
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  )
}

export default App
