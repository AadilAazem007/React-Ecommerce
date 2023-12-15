export async function saveOrderData (details) 
{
    const response = await fetch('http://localhost:3002/order/save-order',{
        method:'POST',
        body: JSON.stringify(details),
        headers: {'content-type':'application/json'}
    })
    const data = await response.json()
    return { data }
}