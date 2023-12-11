import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-hot-toast';


export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const submitHandler = async (e)=>{
        e.preventDefault();
        const {email, password} = data;
        try {
            const {data} = await axios.post('/login', {
                email, password
            })
            if(data.error) {
                toast.error(data.error);
            } 
            else {
                setData({});
                toast.success('Redirecting to Dashboard!');
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-full h-full my-auto bg-[#003459] md:bg-white py-4 flex flex-col items-center justify-center">
                <form onSubmit={submitHandler} className="w-[80%] md:w-[60%] mx-auto flex flex-col bg-white shadow-xl p-6 rounded-lg">
                    <label htmlFor="email" className="font-bold">Email Address</label><br/>
                    <input type="email" id="email" name="email" placeholder="Email Address" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <label htmlFor="password" className="font-bold">Password</label><br/>
                    <input type="password" id="password" name="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <input type="submit" value="Login" className="bg-[#007ea7] w-[200px] rounded-md font-medium mt-2 mx-auto md:mx-0 py-2 text-white hover:bg-[#0077b6]"/>
                    <p className="text-center mt-3 pt-2 border-t-2 border-solid">Don't have an account? <Link to="/register" className="text-[#0077b6]">SignUp</Link></p>
                </form>
            </div>
        </>
    )
}