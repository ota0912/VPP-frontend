import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Working from "./components/Working"
import Predict from "./components/Predict"
import Footer from "./components/Footer"

const App:React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Working />
      <Predict/>
      <Footer />
    </div>
  )
}

export default App
