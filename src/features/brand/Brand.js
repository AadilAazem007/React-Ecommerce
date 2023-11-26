import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AllBrandListAsync, selectAllBrand, getSingleBrandDataAsync } from './brandSlice'

function Brand({getType})
{
    const brands = useSelector(selectAllBrand)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(AllBrandListAsync())
    }, [dispatch])

    function getBrand(e, brand)
    {
        if(e.target.checked===true)
        {
            getType('brand')
            dispatch(getSingleBrandDataAsync(brand))
        }
        else{
            getType(null)
        }
    }

    return (
        <>
            <div className="brandList">
            <h2>All Brands</h2>
                {
                    brands.map((brand, index) => {
                        return (<p>
                            <h3> <p> <input type="checkbox" onClick={(e)=>getBrand(e,brand.brand)}/> {brand.brand} </p></h3>
                        </p>)
                        
                    })
                }
            </div>
        </>
    )
}

export default Brand