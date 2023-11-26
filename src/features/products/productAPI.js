export async function fetchAllProduct() {
      const response = await fetch('http://localhost:3002/products')
      const data = await response.json()
      return {data}
}

export async function getSingleProduct(id)
{
      const response = await fetch(`http://localhost:3002/product/${id}`)
      const data = await response.json()
      return {data}
}