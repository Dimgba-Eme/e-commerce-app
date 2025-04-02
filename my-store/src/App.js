import { Route, Routes } from "react-router-dom";

import ProductsCategories from "./components/ProductsCategories";
import SingleItem from "./components/SingleItem";


import Home from "./pages/Home";
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup'
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="hoodies" element={<ProductsCategories category='hoodies' />} />
          <Route path="t-shirt" element={<ProductsCategories category='t-shirt' />} />
          <Route path="headwear" element={<ProductsCategories category='headwear' />} />
          <Route path="footwear" element={<ProductsCategories category='footwear' />} />
          <Route path="accessories" element={<ProductsCategories category='accessories' />} />
        </Route>
        <Route path='/single-item' element={<SingleItem />} >
          <Route path=':productId' element={<SingleItem />} />
        </Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
