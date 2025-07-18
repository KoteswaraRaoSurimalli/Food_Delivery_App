import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const  StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartItems , setCartItems] = useState({});

    //add Cart
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=> ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    //remove Cart
    const removeToCartItem = (itemId)=>{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
   
    // useEffect(()=>{
    //     console.log(cartItems);
        
    // },[cartItems])
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]){

                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount+= itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const contexValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeToCartItem,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contexValue}>

            {props.children}
        </StoreContext.Provider> 
    )
}

export default StoreContextProvider;