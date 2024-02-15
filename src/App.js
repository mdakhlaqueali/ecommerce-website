import './App.css';
import Showproducts from './components/Showproduct.jsx';
import MyNavbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Showproducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;