import { useForm } from "react-hook-form"
import { saveUserDataAsync } from "./authSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import CryptoJS from "crypto-js"

function Register () {
    const [encryptedData, setEncryptedData] = useState("")
    const [decryptedData, setDecryptedData] = useState("")

    const secretPass = "KJHVKJHIIKJ654"

    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            city:"",
            mobile:""
        }
    })
    const dispatch = useDispatch()
    return (
        <>
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit((data)=>{
                const encryptionData = CryptoJS.AES.encrypt(JSON.stringify(data.password), secretPass).toString() 
                const formData = {...data, encrypt_password:encryptionData}
                dispatch(saveUserDataAsync(formData))
             })}>
                <input type="text" {...register("name", {required: "Name is required"})}  placeholder="name"/>
                <p>{errors.name?.message}</p>
                <input type="text" {...register("email", {required: "Email is required", pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message:"Please Provide valid Email address"}})} placeholder="email"/>
                <p>{errors.email?.message}</p>
                <input type="password" {...register("password", {required: "Password is required", minLength: {value:8, message: "Minimum 8 character require"}})} placeholder="password"/>
                <p>{errors.password?.message}</p>
                <input type="text" {...register("city",{required: "City is require"})} placeholder="city"/>
                <p>{errors.city?.message}</p>
                <input type="text" {...register("mobile",{required: "Mobile No is require", maxLength:{value:12, message: "Maximum length of mobile 12"}, minLength:{value:10, message: "Minimum length of mobile 10 require"}})} placeholder="mobile"/>
                <p>{errors.mobile?.message}</p>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}

export default Register