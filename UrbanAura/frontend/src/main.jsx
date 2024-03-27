import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Shop from './Components/Shop/Shop.jsx'
import ShopCategory from './Components/ShopCategory/ShopCategory.jsx'
import Product from './Components/Product/Product.jsx'
import { ShopContextProvider } from './Context/ShopContext.jsx'
import banner_men from '../src/assets/banner_men.jpg'
import banner_women from '../src/assets/banner_women.jpg'
import banner_kid from '../src/assets/banner_kid.jpg'
import CartItem from './Components/Cart-Items/CartItem.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'


const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men'element={<ShopCategory banner={banner_men} category='men' />}/>
      <Route path='/kid'element={<ShopCategory banner={banner_kid} category='kid'/>}/>
      <Route path='/women'element={<ShopCategory banner={banner_women} category='women'/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
        <Route path='/CartItem' element={<CartItem/>}/>
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
    <RouterProvider router={router}/>
    </ShopContextProvider>
  </React.StrictMode>,
)
