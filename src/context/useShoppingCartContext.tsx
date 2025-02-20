import React, {  createContext, useContext, useState } from "react";

interface ShopingCartProvider {
    children : React.ReactNode
}

interface ShoppingCartContext {
    cartItems : cartItem[],
    handleIncreaseProductQty : (id: number | string) => void,
    handleDecreasProductQty : (id : number | string) => void,
    getProductQty : (id: number | string) => number,
    handelRemoveProductQty : (id: number | string) => void
    
}

interface cartItem {
    id: number | string ,
    qty : number // how many item we need ? 
}



export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => (useContext(ShoppingCartContext))  

export function ShopingCartProvider({children} : ShopingCartProvider) {
    const [cartItems, setCartItem ] = useState<cartItem[]>([])

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

    return (
        <ShoppingCartContext.Provider value={{cartItems, handleIncreaseProductQty , handleDecreasProductQty , getProductQty ,handelRemoveProductQty}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}