import { useEffect, useState } from "react";
import "./App.css";
import Features from "./components/Main/Features/Features";
import HotSales from "./components/Main/HotSales";
import Main from "./components/Main/Main";
import Products from "./components/Main/Products/Products";
import { useAppDispatch } from "./store/Store";
import { fetchCartData } from "./store/CartSlice";
import axios from "axios";

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}
function App() {
  const [products , setProducts] = useState<Product[]>([])
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCartData());
    axios.get<Product[]>("https://fakestoreapi.com/products").then(({data})=> {
      setProducts(data)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    <Main />
    <Products products={products}/>
    <HotSales />
    <Features />
  </>

}

export default App;