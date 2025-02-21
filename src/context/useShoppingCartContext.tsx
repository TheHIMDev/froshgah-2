import React, {  createContext,  useContext, useEffect, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorege";
import {  useNavigate } from "react-router-dom";

interface ShopingCartProvider {
    children : React.ReactNode
}

interface ShoppingCartContext {
    cartItems : cartItem[],
    handleIncreaseProductQty : (id: number | string) => void,
    handleDecreasProductQty : (id : number | string) => void,
    getProductQty : (id: number | string) => number,
    handelRemoveProductQty : (id: number | string) => void,
    cartQty : number,
    isLogin : boolean ,
    handelIsLogin : () => void,
    handelLogout : () => void
    
}

interface cartItem {
    id: number | string ,
    qty : number // how many item we need ? 
}



export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => (useContext(ShoppingCartContext))  

export function ShopingCartProvider({children} : ShopingCartProvider) {
    const [cartItems, setCartItem ] = useLocalStorage<cartItem[]>("cartItem",[])

    const handleIncreaseProductQty = (id: number | string) => {
        setCartItem((curentItem) => {
            let selectedItem = curentItem.find(item => item.id == id)
            if(!selectedItem) {
                return [...curentItem , {id: id , qty : 1}] 
            }  else {
                return curentItem.map((item)=>{
                    if(item.id == id) {
                        return {
                            ...item,
                            qty : item.qty + 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const handleDecreasProductQty = (id: number | string) => {
        setCartItem((curentItem) => {
            let selectedItem = curentItem.find(item => item.id == id);
            if(selectedItem?.qty === 1) {
                return curentItem.filter(item => item.id !== id)
            } else {
                return curentItem.map((item) => {
                    if(item.id = id) {
                        return {
                            ...item ,
                            qty : item.qty - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const getProductQty = (id: number | string ) => {
        return cartItems.find((item) => item.id == id)?.qty || 0
    }

    const handelRemoveProductQty = (id: number | string) => {
        setCartItem(currentItem => currentItem.filter((item)=>  item.id !== id))
    }

    const cartQty = cartItems.reduce((totalQty , item)=> totalQty + item.qty,0)

    const [isLogin, setIsLogin] = useState(false);

    const Navigate = useNavigate()

    const handelIsLogin = () => {
        
        setIsLogin(true)
        localStorage.setItem("token", JSON.stringify(true))
        Navigate("/")
    }

    const handelLogout = () => {
        setIsLogin(false)
    }

    useEffect(()=> {
        let token = JSON.parse(localStorage.getItem("token") as string) 

        if( token ) {
            
            setIsLogin(true)
        }
    },[])

    return (
        <ShoppingCartContext.Provider 
        value={{
            cartItems,
            handleIncreaseProductQty ,
            handleDecreasProductQty ,
            getProductQty ,
            handelRemoveProductQty,
            cartQty ,
            isLogin,
            handelIsLogin ,
            handelLogout
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}