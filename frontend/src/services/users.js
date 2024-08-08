import axios from 'axios';
import config from '../conf/config';

class users{
   
    async getCurrentUser(){
        try {
            const response = await axios.get(`${config.apiBaseUrl}/user/current`,{withCredentials:true});
            
            return response.data;
            
        } catch (error) {
            return error;
        }
   }

    async getAllUsers(){
        try {
            const response = await axios.get(`${config.apiBaseUrl}/user/all`,{withCredentials:true});
            console.log(response.data)  
            return response.data;
        } catch (error) {
           return error 
        }
    }
};
const getUsersService= new users();
export default getUsersService;