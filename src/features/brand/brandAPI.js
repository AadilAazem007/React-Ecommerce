export async function AllBrandList(){
    const response = await fetch('http://localhost:3002/brand')
      const data = await response.json()
      return {data}
}

export async function getSingleBrandData(brand)
{
    const response = await fetch(`http://localhost:3002/brand/${brand}`)
    const data = await response.json()
    return {data}
}