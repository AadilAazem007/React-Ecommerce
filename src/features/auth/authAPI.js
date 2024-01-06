export async function saveUserData(details)
{
    const response = await fetch(`http://localhost:3002/users/save-data`,{
        method:'POST',
        body: JSON.stringify(details),
        headers: {"content-type":"application/json"}
    })
    const data = await response.json()
    console.log(data)
    return {data}
}