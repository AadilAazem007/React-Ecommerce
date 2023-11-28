import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../auth/authSlice"
import { useEffect } from "react"
import { getAllCartDataAsync, cartAllProducts } from "./cartSlice"

function Cart(){

    const dispatch = useDispatch()
    const user = useSelector(selectLoggedUser)
    const products = useSelector(cartAllProducts)

    useEffect(()=>{
        dispatch(getAllCartDataAsync(user))
    },[dispatch])

    function removeProduct(id)
    {
        
    }

    const totalPrice = products.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
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
                            <button onClick={()=>removeProduct(product.id)}>Remove</button>
                        </div>
                    </p>
                    </li>
                ))
            }
            </ul>

            <h3> Totel Price : {totalPrice} </h3>
        </>
    )
}

export default Cart