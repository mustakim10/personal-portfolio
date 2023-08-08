import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks"
import Portfolio from "./components/portfolio"

function App() {
  
  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
  <Portfolio></Portfolio>
  <Experience></Experience>
  <Contact></Contact>

    <SocialLinks></SocialLinks>
    </>
  )
}

export default App
