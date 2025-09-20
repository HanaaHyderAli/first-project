import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contactus from "./pages/Contactus";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import {ToastContainer} from 'react-toastify';
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import EachProduct from "./pages/EachProduct";
import Verify from "./pages/Verify";


function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<EachProduct/>}/>
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/place-order" element={<PlaceOrder/>}></Route>
        <Route path="/mycart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/verify" element={<Verify/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
