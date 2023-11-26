export async function AllCategoryList(){
    const response = await fetch('http://localhost:3002/category')
      const data = await response.json()
      return {data}
}

export async function getSingleCategoryData(category)
{
    const response = await fetch(`http://localhost:3002/category/${category}`)
    const data = await response.json()
    return {data}
}