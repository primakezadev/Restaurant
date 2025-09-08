"use client";

import Link from "next/link"
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartIcon = () => {
    const { getItemCount } = useCart();
    const itemCount = getItemCount();

    return(
      <Link href="/cart" className="flex items-center">
         <div className="relative w-9 h-8">
          <FaCartArrowDown className="w-9"/>
            </div>
            <span>Cart ({itemCount})</span>
        </Link>
    )
}


export default CartIcon
