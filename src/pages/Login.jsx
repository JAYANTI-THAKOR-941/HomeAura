import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);

      const users = res.data;
      // console.log(users);

      if(users.length > 0 ){
        const loginUser = users[0];
        localStorage.setItem('homeAuraUser',JSON.stringify(loginUser))
        alert('Login successfully.!!');
        navigate('/')
      }
      else{
         alert('Incorrect email & password.!!');
      }
    }
    catch(error){
      console.log('Faild to login user.!!',error)
    }
  }

  return (
    <div>
      <input type="text" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
