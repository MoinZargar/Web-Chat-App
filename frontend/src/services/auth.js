import axios from 'axios';
import config from '../conf/config';

class authentication{
  
   async signup({username,email, password}) {
      try {
        const response = await axios.post(`${config.apiBaseUrl}/auth/register`, {email,username,password} ,{withCredentials:true});
        return response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
   }
   async login({email, password}){
        try {
            const response = await axios.post(`${config.apiBaseUrl}/auth/login`, {email, password},{withCredentials:true});
            return response.data;
        } catch (error) {
            return error;
        }
   }
 
   async logout(){
       try {
        const response = await axios.get(`${config.apiBaseUrl}/auth/logout`,{withCredentials:true});
        return response.data;
       } catch (error) {
        return  error;
       }
   }

   async getCurrentUser(){
    try {
        const response = await axios.get(`${config.apiBaseUrl}/user/current`,{withCredentials:true});
        
        return response.data;
        
    } catch (error) {
        return error;
    }
}
    
};

const getAuthService= new authentication();
export default getAuthService;