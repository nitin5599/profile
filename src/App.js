import './App.css';
import logo from "./Assets/logo.png";
import About from './Screens/About';
import Navbar from './Screens/Navbar';
import Footer from './Screens/Footer';
import Projects from './Screens/Projects';
import Testimonials from './Screens/Testimonials';
import Contact from './Screens/Contact';
import Skills from './Screens/Skills';
import Extra from './Screens/Extra';
import Home from './Screens/Home';
import Work from './Screens/Work';
import Error from './Screens/Error';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Thanks from './Screens/Thanks';

function App() {
  return (
    <BrowserRouter>
      <main>        
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/work" element={<Work/>} exact/>
            <Route path="/thanks" element={<Thanks/>} exact/>
            <Route path="*" element={<Error/>} />
        </Routes>
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
