import Books from "./components/Books";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home"
import styled from 'styled-components'
import { motion } from 'framer-motion';





function App() {
  return (
    <div className="container">
      <FirstPage>
        <Header/>
        <Home/>     
      </FirstPage>
      <Books/>
      <Contact/>  

     
    </div>
  );
}


const FirstPage = styled(motion.div)`
  height: 700px;
  min-height: auto;
`
export default App;
