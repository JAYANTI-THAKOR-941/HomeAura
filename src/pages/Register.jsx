import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const newUser = {
        name:form.name,
        email:form.email,
        password:form.password,
        role:"user"
      }

      await axios.post('http://localhost:3000/users',newUser);
      alert('Register successfully.!!');
      navigate('/login')

    }
    catch(error){
      console.log('Faild to register user.!!',error)
    }
  }

  return (
    <div>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
