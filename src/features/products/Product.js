import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAllProductAsync, selectAllProducts } from "./productSlice"
import { selectSingleCategory } from "../category/categorySlice"
import { selectSingleBrand } from "../brand/brandSlice"
import { saveCartDataAsync } from "../cart/cartSlice"
import { selectLoggedUser } from "../auth/authSlice"
import { Link } from "react-router-dom"


function Product ({type}) {

    const products = useSelector(selectAllProducts)
    const categoryProducts = useSelector(selectSingleCategory)
    const brandProducts = useSelector(selectSingleBrand)
    const user = useSelector(selectLoggedUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProductAsync())
    }, [dispatch])

    function addToCart(item)
    {
        dispatch(saveCartDataAsync(item))
    }

    let renderedProducts = null;
    console.log(type)
    if (type === 'brand' && brandProducts.length > 0) {
        renderedProducts = brandProducts.map((product, index) => (
            <p key={index}>  
                <div className="productCard">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title}/>
                    <label>Price : {product.price} </label> <label>Rating : {product.rating} </label>
                </Link>
                    <h3> <button onClick={()=>addToCart({ itemId:product.id, userId: user, title: product.title, thumbnail: product.thumbnail, price: product.price, rating: product.rating, status: 'pending', quantity: 1  })}> Add To Cart </button> </h3>
                </div>
            </p>
        ));
    } else if (type === 'category' && categoryProducts.length > 0) {
        renderedProducts = categoryProducts.map((product, index) => (
            <p key={index}>
                <div className="productCard">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title}/>
                    <label>Price : {product.price} </label> <label>Rating : {product.rating} </label>
                </Link>
                    <h3> <button onClick={()=>addToCart({ itemId:product.id, userId: user, title: product.title, thumbnail: product.thumbnail, price: product.price, rating: product.rating, status: 'pending', quantity: 1  })}> Add To Cart </button> </h3>
                </div>
            </p>
        ));
    } else {
        renderedProducts = products.map((product, index) => (
            <p key={index}>
                <div className="productCard">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                    <img src={product.thumbnail} alt={product.title}/>
                    <label>Price : {product.price} </label> <label>Rating : {product.rating} </label>
                </Link>
                    <h3> <button onClick={()=>addToCart({ itemId:product.id, userId: user, title: product.title, thumbnail: product.thumbnail, price: product.price, rating: product.rating, status: 'pending', quantity: 1  })}> Add To Cart </button> </h3>
                </div>
            </p>
        ));
    }

    return (
        <>
        <div className="productList">
            <h2>All products</h2>
            
                {renderedProducts}
            
        </div> 
        </>
    )
}

export default Product