import { useEffect } from "react";
import "./App.css";
import Features from "./components/Main/Features/Features";
import HotSales from "./components/Main/HotSales";
import Main from "./components/Main/Main";
import Products from "./components/Main/Products/Products";
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