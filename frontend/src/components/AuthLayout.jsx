import {React,useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'


export default function Protected({children,authentication = true}){
    
    const navigate=useNavigate()
    const[loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>state.auth.status)
    useEffect(()=>{
    
        if(!authStatus && authentication===true){
            navigate('/login')
        }
        else if(authStatus && authentication===false){
            navigate('/chat')
        }
        else{
            setLoader(false)
        } 

    },[authStatus,authentication,navigate])
    
    return loader ? <h1>Loading...</h1> : <>{children}</>
}