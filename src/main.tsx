import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from "./store/Store.ts"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Cart from './components/Cart.tsx'
import Layout from './Layout.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' index element={<App />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)