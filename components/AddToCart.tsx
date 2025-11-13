'use client'
import { useSelector } from "react-redux"
import Link from "next/link";

const AddToCart = () => {
    const cartSelector = useSelector((state:any)=>state.cart.value);
    // console.log(cartSelector);
    
    return (
        <div className="cart">
            <Link href="/cart" >
            <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" className="cart-icon" alt="Cart" />
            <span className="cart-count">{cartSelector?cartSelector:0}</span></Link>
        </div>
    )
}

export default AddToCart