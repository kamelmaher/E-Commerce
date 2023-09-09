import { useEffect } from "react";
import "./App.css";
import Features from "./components/Features";
import HotSales from "./components/HotSales";
import Main from "./components/Main";
import Products from "./components/Products";
import { useAppDispatch } from "./store/Store";
import { fetchCartData } from "./store/CartSlice";

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  return <>
    <Main />
    <Products />
    <HotSales />
    <Features />
  </>

}

export default App;