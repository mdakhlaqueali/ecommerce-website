import './App.css';
import Showproducts from './components/Showproduct.jsx';
import MyNavbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AuthPage from './pages/AuthPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './store/auth-context';
import { useContext } from 'react';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <MyNavbar/>
      {authCtx.isLoggedIn && <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Showproducts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>}
      {!authCtx.isLoggedIn && <Navigate to="/auth" />}
      {!authCtx.isLoggedIn && <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>}
    </div>
  );
}

export default App;