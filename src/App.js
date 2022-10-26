import "./App.css";
import { Navbar } from "./Compenent/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Result from "./Pages/Result/Result"
import News from "./Pages/News/News"
import Images from "./Pages/Images/Images"
import Maps from "./Pages/Maps/Maps"
import Videos from "./Pages/Videos/Videos"

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<><Navbar /><Result /></>} />
      <Route path="/news" element={<><Navbar /><News /></>} />
      <Route path="/images" element={<><Navbar /><Images /></>} />
      <Route path="/maps" element={<><Navbar /><Maps /></>} />
      <Route path="/videos" element={<><Navbar /><Videos /></>} />
    </Routes>

  );
}

export default App;
