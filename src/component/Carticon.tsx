import Link from "next/link"
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";

const CartIcon = () => {
    return(
      <Link href="/cart" className="flex items-center">
         <div className="relative w-9-h-8">
          <FaCartArrowDown className="w-9"/>
          
            </div>
            <span>Cart (3)</span>
        </Link>
    )
}


export default CartIcon