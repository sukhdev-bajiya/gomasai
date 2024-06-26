import "./App.css";
import Navbar from "./compenent/Navbar/Navbar";
import NavbarTranslate from "./compenent/Navbar/NavbarTranslate";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Result from "./Pages/Result/Result"
import News from "./Pages/News/News"
import Images from "./Pages/Images/Images"
import Maps from "./Pages/Maps/Maps"
import Videos from "./Pages/Videos/Videos"
import Translate from "./Pages/Translate/Translate"
import Shopping from "./Pages/Shopping/Shopping"
import Books from "./Pages/Books/Books"
import Account from "./Pages/Account/Account"

function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<><Navbar /><Result /></>} />
      <Route path="/news" element={<><NavbarTranslate /><News /></>} />
      <Route path="/images" element={<><Navbar /><Images /></>} />
      <Route path="/maps" element={<><Navbar /><Maps /></>} />
      <Route path="/videos" element={<><Navbar /><Videos /></>} />
      <Route path="/translate" element={<><NavbarTranslate /><Translate /></>} />
      <Route path="/shopping" element={<><NavbarTranslate /><Shopping /></>} />
      <Route path="/books" element={<><NavbarTranslate /><Books /></>} />
      <Route path="/account" element={<><NavbarTranslate /><Account /></>} />
    </Routes>

  );
}

export default App;
