import { React,useState,useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice.js'
import getUsersService from './services/users.js'
import getAuthService from './services/auth.js'

export default function App() {
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => { 
    
    getUsersService.getCurrentUser()
    .then((user)=>{
      
      if(user.statusCode==200){
         
        dispatch(login(user))
      }
      else{
        
        dispatch(logout())
      }
    })
    .finally(()=>{
      
      setLoading(false)
    })
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
       
        <main >
         <Outlet />
        </main>
       
      </div>
    </div>
  ) : null
}




