import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login as StoreLogin } from "../store/authSlice.js";
import { useDispatch } from "react-redux";
import getAuthService from "../services/auth.js";

// import {Button,Input} from '../index.jsx'

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
 
    try {
      const response = await getAuthService.login({ email, password });

      if (response.statusCode === 200) {
        const userData = await getAuthService.getCurrentUser();

        dispatch(StoreLogin(userData));
        navigate("/");
      } else {
        const  errorResponse = response.response.data;

        if(errorResponse.errors && errorResponse.errors.length > 0){
          
          setError(errorResponse.errors.map(err => err.msg));
        }
        else{
          console.log(errorResponse.message);
          setError([errorResponse.message]);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In to Continue
        </h2>
      </div>

     
      {error.length > 0 &&
        error.map((err, index) => (
          <div
            key={index}
            className="bg-red-100 border border-red-400 mt-2 text-red-700 px-4 py-3  rounded relative text-center"
            role="alert"
          >
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline">{err}</span>
          </div>
        ))}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
               
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
             
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
