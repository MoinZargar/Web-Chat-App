import { BiLogOut } from "react-icons/bi";
import getAuthService from "../../services/auth";
import {useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {logout} from "../../store/authSlice.js"

const LogoutButton = () => {

	const navigate = useNavigate();
    const dispatch = useDispatch();
	const Logout = async () => {
         try {
			const response = await getAuthService.logout();
			console.log(response);
			if(response.statusCode==200){
                dispatch(logout());
				navigate('/login');
			}
				
		 } catch (error) {
			console.log(error);
		 }
	}
	return (
		<div className='mt-auto'>
			
				<BiLogOut onClick={Logout} className='w-6 h-6 text-white cursor-pointer'  />
			
				
			
		</div>
	);
};
export default LogoutButton;