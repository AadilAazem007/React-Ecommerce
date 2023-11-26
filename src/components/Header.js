import MainProduct from "../features/products/MainProduct"
import Cart from "../features/cart/Cart"
import { Link } from "react-router-dom"


function Header(){
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>        
        </>
    )
}

export default Header