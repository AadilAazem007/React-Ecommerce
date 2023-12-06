import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../auth/authSlice"
import { useEffect, useState } from "react"
import { getAllCartDataAsync, cartAllProducts, removeCartProductAsync, updateCartQuanityAsync } from "../cart/cartSlice"
import { saveAddressAsync, checkoutAddress, getAddressAsync } from "./checkOutSlice"

function Checkout(){

    const dispatch = useDispatch()
    const user = useSelector(selectLoggedUser)
    const products = useSelector(cartAllProducts)
    const address = useSelector(checkoutAddress)
    const [firstAddress, setFirstAddress] = useState("")
    const [secondAddress, setSecondAddress] = useState("")

    useEffect(()=>{
        dispatch(getAllCartDataAsync(user))
    },[dispatch])

    useEffect(()=>{
        console.log(address)
        dispatch(getAddressAsync(user))
    },[dispatch])

    function firstAddressFunc(e)
    {
        setFirstAddress(e.target.value)
    }

    function secondAddressFunc(e)
    {
        setSecondAddress(e.target.value)
    }

    function saveAddress()
    {
        const details = {firstAddress,secondAddress,userId: user}
        dispatch(saveAddressAsync(details))
    }

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
        <h2>Checkout</h2>
        <div className="cartPage">
        <ul>
            {
                products.map((product, index) => (
                    <li>
                        <p key={index}>
                            <div className="cardData">
                                <h3>{product.title}</h3>
                                <img src={product.thumbnail} alt={product.title}/>
                                <label>Price : {product.price} </label>
                                <select onChange={(e)=>handleQuantity(product.id,e)} value={product.quantity}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <button onClick={()=>removeProduct(product.id)}>Remove</button>
                            </div>
                            
                        </p>
                    </li>
                ))
            }
            </ul>
            <h3> Total Price : {totalPrice} </h3>
        </div>

        <div className="cartAddress">
            <div className="addressOne"><h2>first Address</h2>
                <textarea onChange={(e)=>firstAddressFunc(e)}></textarea>
            </div>
            <div className="addressTwo"><h2>Second Address</h2>
                <textarea onChange={(e)=>secondAddressFunc(e)}></textarea>
            </div>
            <button onClick={saveAddress}>Add Address</button>
        </div>
     </>   
    )
}

export default Checkout