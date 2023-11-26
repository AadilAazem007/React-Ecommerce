import { getSingleProductAsync, selectSingleProduct } from "./productSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function SingleProduct()
{
    const dispatch = useDispatch()
    const product = useSelector(selectSingleProduct)[0]
    const params = useParams()

    useEffect(()=>{
        console.log(product)
        dispatch(getSingleProductAsync(params.id))
    },[dispatch])

    return (
        <>
            <p>{product.title}</p>
            <br/>
            <p><img src={product.thumbnail} /></p>
            <br/>
            <p>{product.price} </p>
            <br/>
            <h3>{product.rating}</h3>
        </>
    )
}

export default SingleProduct