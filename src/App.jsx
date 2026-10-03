import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Work from "./Components/My Work/Work"
import Contact from "./Components/Contact Me/Contact"

function App() {

  return (
    <div>
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
