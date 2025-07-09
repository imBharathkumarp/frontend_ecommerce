import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/Pages/Products/CategoryProducts";
import Contact from "./app/Pages/Contact";
import Home from "./app/Pages/HomePage/Home";
import PageNotFound from "./app/Pages/PageNotFound";
import AllProducts from "./app/Pages/Products/AllProducts";
import SingleProductDetails from "./app/Pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/Pages/Cart";
import TopNavbar from "./app/Coponents/Header/TopNavbar";
import Login from "./app/Login";
import Signup from "./app/Signup";
function App() {

  const [darkMode , setDarkMode] = useState(false)

  // Load saved theme on mount 
  useEffect(() => {
    const savedMode = localStorage.getItem("theme")
    if(savedMode === 'dark'){
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  } ,[])

  // Toggle theme 
  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    if(!darkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Fragment>

      <div>

        <TopNavbar darkMode={darkMode} toggleMode={toggleMode} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
