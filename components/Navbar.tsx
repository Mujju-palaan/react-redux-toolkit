import Link from "next/link"
import AddToCart from "./AddToCart"

const Navbar = () => {
    return (
        <header>

            <div className="logo">MyShop</div>
            <nav>
                <ul>
                    <li><Link href="/" >Home </Link></li>
                    <li><Link href="/item" >Item </Link></li>
                    <li><Link href="/product" >Product </Link></li>
                  
                </ul>
            </nav>
            <AddToCart />
        </header>
    )
}

export default Navbar