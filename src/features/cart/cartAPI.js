export async function getAllCartData(id)
{
    const response = await fetch(`http://localhost:3002/cart/${id}`)
    const data = await response.json()
    return {data}
}

export async function saveCartData(item)
{
    const response = await fetch('http://localhost:3002/cart/store-cart', {
        method: "POST",
        body: JSON.stringify(item),
        headers: {'content-type':'application/json'}
    })
    const data = await response.json()
    return {data}
}