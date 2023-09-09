import { useEffect, useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HotSales from "./components/HotSales";
import Main from "./components/Main";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useAppDispatch } from "./store/Store";
import { fetchCartData } from "./store/CartSlice";

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCartData());
    const show = localStorage.getItem("show");
    if (show) {
      const show = localStorage.getItem("show");
      setShowCart(show == "true" ? true : false)
    }
  }, [])
  const [showCart, setShowCart] = useState(false);
  function showMyCart(x: boolean) {
    setShowCart(x);
    localStorage.setItem("show", x + "");
  }
  return <>
    <Header show={showMyCart} />
    {showCart ?
      <Cart /> :
      <>
        <Main />
        <Products />
        <HotSales />
        <Features />
      </>
    }
    <Footer />


  </>;
}

export default App;