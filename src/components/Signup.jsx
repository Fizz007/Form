import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usercont } from "./Userauth";

const Signup = () => {

    const {a, signup} = useContext(usercont)
   
  const [error, setError] = useState();
  const [value, setvalue] = useState({
    name: "",
    email: "",
    pass: ""
  });
  const navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault()
    // console.log(userinfo)
    if (!value.email || !value.pass || !value.name) {
      setError("Some fields are missing");
    } 
    else  {
      if(a.some((item)=> {
       return ( item.email === value.email)
      }))
      {
        setError("already email exist")
      }
      
      else{
        a.push(value)
        signup(a)
       
        navigate("/");
      }
      // a.push(value)
      // signup(a)
      // navigate("/");
      // setvalue('')
    
    }
  };

  function handleinputchange(e) {
    setvalue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <h1>SignUp</h1>
      <form action="" className="formm">
        <label htmlFor="">Name</label>
        <input
          name="name"
          type="text"
          value={value.name}
          placeholder="username"
          onChange={handleinputchange}
        />

        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={value.email}
          onChange={handleinputchange}
        />

        <label htmlFor="">Password</label>
        <input
          name="pass"
          type="password"
          placeholder="******"
          value={value.pass}
          onChange={handleinputchange}
        />
        {error}
        <button onClick={handleSubmit}>SignUp</button>
      </form>

      
    </>
  );
};

export default Signup;
