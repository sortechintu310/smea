import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Insightbot from "./pages/InsightBot/Insightbot";
import Analytics from "./pages/Analytics/Analytics";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";


export default function App(){
  return(
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/insightbot" element={<Insightbot/>} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      <Chatbot/>
    </main>
  )
}