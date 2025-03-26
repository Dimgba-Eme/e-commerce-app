import { Route, Routes } from "react-router-dom";



import Home from "./pages/Home";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login-signup" element={<LoginSignup />} />
      </Routes>

    </>
  );
}

export default App;
