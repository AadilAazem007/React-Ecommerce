import { getSingleProductAsync, selectSingleProduct } from "./productSlice"
import { useSelector, useDispatch } from "react-redux"
import { selectLoggedUser } from "../auth/authSlice"
import { saveCartDataAsync } from "../cart/cartSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function SingleProduct()
{
    const dispatch = useDispatch()
    const products = useSelector(selectSingleProduct)
    const user = useSelector(selectLoggedUser)
    const params = useParams()

    useEffect(()=>{
        dispatch(getSingleProductAsync(params.id))
    },[dispatch, params.id])

    function addToCart(item)
    {
        dispatch(saveCartDataAsync(item))
    }

    const product = products.length ? products[0] : null;

    return (
        <>
            {product ? (
                <>
                    <h3>Product Detail</h3>
                    <p>{product.title}</p>
                    <br />
                    <p><img src={product.thumbnail} alt={product.title} /></p>
                    <br />
                    <p>Price :- {product.price}</p>
                    <br />
                    <h3> Rating :- {product.rating}</h3>
                    <h3> <button onClick={()=>addToCart({ itemId:product.id, userId: user, title: product.title, thumbnail: product.thumbnail, price: product.price, rating: product.rating, status: 'pending'  })}> Add To Cart </button> </h3>
                </>
            ) : (
                <p>Loading...</p> // Display a loading message while data is being fetched
            )}
        </>
    )
}

export default SingleProduct
