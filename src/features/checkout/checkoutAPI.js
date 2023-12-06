export async function saveAddress(details)
{
    const response = await fetch('http://localhost:3002/address/insert',
    {
        method:'POST',
        body: JSON.stringify(details),
        headers: {'content-type':'application/json'}
    })
    const data = await response.json()
    return { data }
}
export async function getAddress(id)
{
    const response = await fetch(`http://localhost:3002/address/getAddress/${id}`)
    const data = await response.json()
    return { data }
}