import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../auth/authSlice"
import { useEffect } from "react"
import { getAllCartDataAsync, cartAllProducts, removeCartProductAsync, updateCartQuanityAsync } from "./cartSlice"
import { Link } from "react-router-dom"

function Cart(){

    const dispatch = useDispatch()
    const user = useSelector(selectLoggedUser)
    const products = useSelector(cartAllProducts)

    useEffect(()=>{
        dispatch(getAllCartDataAsync(user))
    },[dispatch])

    function removeProduct(id)
    {
        dispatch(removeCartProductAsync(id))
    }

    function handleQuantity (id, e)
    {
        const item = {id, quantity: +e.target.value}
        dispatch(updateCartQuanityAsync(item))
    }

    const totalPrice = products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0);

    return (
        <>
            <h2>Cart Detail</h2>
            <hr/>
            <ul>
            {
                products.map((product, index) => (
                    <li><p key={index}>
                         <div className="cartList">
                            <h3>{product.title}</h3>
                            <img src={product.thumbnail} alt={product.title}/>
                            <label>Price : {product.price} </label> <label>Rating : {product.rating} </label>
                            <select onChange={(e)=>handleQuantity(product.id,e)} value={product.quantity}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                            
                        </div>
                        <button onClick={()=>removeProduct(product.id)}>Remove</button>
                    </p>
                    </li>
                ))
            }
            </ul>
            <h3> Total Price : {totalPrice} </h3>
            <div>
            <hr/>
                <Link to='/checkout'> Checkout </Link>
            </div>
        </>
    )
}

export default Cart