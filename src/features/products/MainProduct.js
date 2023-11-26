import { useState } from "react"
import Product from "./Product"
import Category from "../category/Category"
import Brand from "../brand/Brand"

function MainProduct(){
    const [type, setType] = useState(null)
  
  function getType(typeVal){
    setType(typeVal)
  }
    return (
        <>
            <div className='leftBox'>
                <Category getType={getType}></Category>
            <hr/>
                <Brand getType={getType}></Brand>
            </div>
            <div className='rightBox'>
                <Product type={type}></Product>
            </div>
        </>
    )
}

export default MainProduct