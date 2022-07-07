import './style.css';
import NavBar from './NavBar';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import About from './pages/About';
import {Route , Routes} from "react-router-dom";

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>


  );
}

export default App;
