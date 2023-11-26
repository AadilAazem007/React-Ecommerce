import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { AllCategoryListAsync, selectAllCategory, getSingleCategoryDataAsync } from "../category/categorySlice"

function Category({getType})
{
    const categories = useSelector(selectAllCategory)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(AllCategoryListAsync())
    }, [dispatch])

    function getCategory(e,category)
    {
        if(e.target.checked===true)
        {
            getType('category')
            dispatch(getSingleCategoryDataAsync(category))
        }
        else{
            getType(null)
        }
    }

    return (
        <>
            <div className="categoryList">
            <h2>All Category</h2>
                {
                    categories.map((category, index) => {
                        return (
                        <p>
                            <div className="categoryCard">
                            <h3> <p> <input type="checkbox" onClick={(e)=>getCategory(e,category.category)}/> {category.category} </p></h3>
                            </div>
                        </p>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Category