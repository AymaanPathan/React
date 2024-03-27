/* eslint-disable react/prop-types */
import  { useState } from 'react'
import { createContext } from 'react'
import Allproduct from '../All_product'


export const ShopContext = createContext(null)

// Default Cart
const getDefaultCart = ()=>{
    let cart ={};
    for(let i=0;i<Allproduct.length+1;i++){
        cart[i] = 0;
    }
    return cart
}



export const ShopContextProvider = (props)=>{
    const [items,setItems] = useState(getDefaultCart())

    // Add To Cart
    const addToCart = (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    // Removing from Cart
    const removeFromCart =(itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // Empty Cart
    const emptyCart = () => {
        setItems(getDefaultCart)
    };



    // Increement in Cart Count
    const cartCount = ()=>{
        let cart = 0
        for(let i in items) {
            if(items[i]>0){
                cart +=items[i]
            }
        }
        return cart
    }
        const contextValue = {emptyCart,cartCount,Allproduct,items,removeFromCart,addToCart};


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

