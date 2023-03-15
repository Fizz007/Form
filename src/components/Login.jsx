import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usercont } from "./Userauth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const auth = useContext(usercont);
  // console.log(email)
  console.log(auth.userinfo)

  function handlesubmit(e) {
    e.preventDefault();
   
    if (!email || !pass) {
      seterror("Some fields are missing");
    } 
    
    else if (auth.userinfo.some((item) => item.email !== email)) {
      seterror("invalid email");
    } 
    
    else {
      navigate("/home");
    }
  }

  function switchtosignup() {
    navigate("/signup");
  }
  return (
    <>
      <form action="">
        <label htmlFor="">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="mailid"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="pass"
          type="password"
          value={pass}
          placeholder="****"
          onChange={(e) => setPass(e.target.value)}
        />
        {error}
        <button type="submit" onClick={handlesubmit}>
          Login
        </button>
      </form>

      <button onClick={switchtosignup}>Don't have an account</button>
    </>
  );
};

export default Login;
