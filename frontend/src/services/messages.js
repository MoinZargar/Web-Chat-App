import axios from "axios";
import config from '../conf/config';

class message{
    async sendMessage({recieverId,message}){
        try {
            const response = await axios.post(`${config.apiBaseUrl}/message/send/${recieverId}`,{message},{withCredentials:true});  
            return response.data;
        } catch (error) {
            return error;
        }
    }
    async getConversation(recieverId){
        try {
            const response = await axios.get(`${config.apiBaseUrl}/message/conversations/${recieverId}`,{withCredentials:true});
            return response.data;
        } catch (error) {
            return error;
        }
    }
}

const getMessageService = new message();
export default getMessageService;