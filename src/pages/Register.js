import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        roll: '',
        email: '',
        year: '',
        branch: '',
        section: '',
        password: '',
    });

    const submitHandler = async (e)=>{
        e.preventDefault();
        const {name, roll, email, year, branch, section, password} = data;
        try {
            const {data} = await axios.post('/register',{
                name, roll, email, year, branch, section, password
            })
            if(data.error){
                toast.error(data.error)
            }
            else{
                setData({});
                toast.success('Registered Successfully!');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="w-full h-full my-auto bg-[#003459] md:bg-white py-4 flex flex-col items-center justify-center">
                <form onSubmit={submitHandler} className="w-[80%] md:w-[60%] mx-auto flex flex-col bg-white shadow-xl p-6 rounded-lg">
                    <label htmlFor="name" className="font-bold">Full Name</label><br/>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <label htmlFor="roll" className="font-bold">Roll Number</label><br/>
                    <input type="text" id="roll" name="roll_no" placeholder="Enter your Roll Number" value={data.roll} onChange={(e) => setData({...data, roll: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <label htmlFor="email" className="font-bold">Email Address</label><br/>
                    <input type="email" id="email" name="email" placeholder="Enter your Email id" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <label htmlFor="year" className="font-bold">Year</label><br/>
                    <select id="year" name="year" required value={data.year} onChange={(e) => setData({...data, year: e.target.value})} className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto">
                        <option value="-1">--SELECT--</option>
                        <option value="1">I</option>
                        <option value="2">II</option>
                        <option value="3">III</option>
                        <option value="4">IV</option>
                    </select><br/>
                    <label htmlFor="branch" className="font-bold">Branch</label><br/>
                    <select id="branch" name="branch" value={data.branch} onChange={(e) => setData({...data, branch: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto">
                        <option value="">--SELECT--</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="CSM">CSM</option>
                        <option value="CSB">CSB</option>
                        <option value="CSC">CSC</option>
                        <option value="CSD">CSD</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="CE">CE</option>
                        <option value="MECH">MECH</option>
                    </select><br/>
                    <label htmlFor="section" className="font-bold">Section</label><br/>
                    <input type="text" id="section" name="section" value={data.section} onChange={(e) => setData({...data, section: e.target.value})} placeholder="Enter your Section" className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <label htmlFor="password" className="font-bold">Password</label><br/>
                    <input type="password" id="password" name="password" placeholder="Create your Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required className="p-2 w-full shadow-sm border-solid border-black border-2 rounded-md mx-auto"/><br/>
                    <input type="submit" value="SignUp" className="bg-[#007ea7] w-[200px] rounded-md font-medium mt-2 mx-auto md:mx-0 py-2 text-white hover:bg-[#0077b6]"/>
                    <p className="text-center mt-3 pt-1 border-t-2 border-solid">Already have an account? <Link to="/login" className="text-[#0077b6]">Login</Link></p>
                </form>
            </div>
        </>
    )
}