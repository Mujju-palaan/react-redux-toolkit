import Link from "next/link"
import AddToCart from "./AddToCart"

const Navbar = () => {
    return (
        <header>

            <div className="logo"><Link href="/" >MyShop</Link></div>
            <nav>
                <ul>
                    <li><Link href="/task" >Task </Link></li>
                    <li><Link href="/item" >Item </Link></li>
                    <li><Link href="/product" >Product </Link></li>
                  
                </ul>
            </nav>
            <AddToCart />
        </header>
    )
}

export default Navbar