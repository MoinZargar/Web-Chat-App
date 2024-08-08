import {React,useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'


export default function Protected({children,authentication = true}){
    

    const navigate=useNavigate()
    const[loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>state.auth.status)
    useEffect(()=>{
        console.log(authStatus)
        //authentication is required but user is not authenticated
        if(authentication && authStatus!==authentication){
            navigate('/login')
        }
        //authentication is not required but user is authenticated
        else if(!authentication && authStatus!==authentication){
            navigate('/chat')
        }
        setLoader(false)
    },[authStatus,authentication,navigate])
    
    return loader ? <h1>Loading...</h1> : <>{children}</>
}