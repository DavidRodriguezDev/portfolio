import './App.scss';
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout/Layout';
import 'animate.css';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
