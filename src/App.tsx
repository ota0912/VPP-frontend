import Header from "./components/Header"
import Hamburger from "./components/Hamburger"
import Home from "./components/Home"
import About from "./components/About"
import Working from "./components/Working"
import Predict from "./components/Predict"
import Footer from "./components/Footer"
import { useState } from "react"

const App:React.FC = () => {

  const [hamOpen, setHamOpen] = useState<boolean>(false);

  return (
    <div>
      <Header hamOpen={hamOpen} setHamOpen={setHamOpen} />
      {hamOpen ? 
        <Hamburger setHamOpen={setHamOpen} />
      :
      <>
        <Home />
        <About />
        <Working />
        <Predict/>
        <Footer />
      </>
      }
    </div>
  )
}

export default App
