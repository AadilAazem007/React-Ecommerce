import CryptoJS from "crypto-js"
import { useParams } from "react-router-dom";
import { generateRandomAlphaNumeric } from "../../app/helper";
import { selectLoggedUser } from "../auth/authSlice";
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react";
import { saveOrderDataAsync } from "./orderSlice";

function Order()
{
    const dispatch = useDispatch()
    const params = useParams()
    const SECRET_PASS  = "ALDLSJDHLJKSHJ"
    const randomString = generateRandomAlphaNumeric(10);
    const user = useSelector(selectLoggedUser)

    // Decrypt
    let bytes  = CryptoJS.AES.decrypt(params.detail, SECRET_PASS);
    let totalPrice = bytes.toString(CryptoJS.enc.Utf8);
    let details

    if(totalPrice)
    {
        details = {
            userId:user, orderId:randomString, price: totalPrice, status: 'success'
        }
    }
    
    useEffect(()=>{
        dispatch(saveOrderDataAsync(details))
    },[])

    return (
        <>{
            totalPrice ?
            <>
            <div><h2> Your Order is completed this please check your order details </h2></div>  
            <div><h3>Your Order Number # ${randomString}</h3></div>
            <div><h3>User Id :- {user}</h3></div>
            <div><h3>Amount Paid :- {totalPrice}</h3></div>
            </>
            :
            null
        }
        </>
    )
}

export default Order