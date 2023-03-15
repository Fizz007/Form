import React, { createContext, useEffect, useState } from "react";

export const usercont = createContext();
let a = [];

const Userauth = ({ children }) => {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   function getdata() {
  //         let userinfo = JSON.parse(localStorage.getItem("formdata"));
  //         a = userinfo;
  //       }
  //    getdata();
  // }, [a])

  // useEffect(()=> {
  //   setuserinfo(JSON.parse(localStorage.getItem("formdata")) || null)
  // },[user])
  
  // const userinfo = JSON.parse(localStorage.getItem("formdata")) || null

  const[userinfo, setuserinfo] = useState(JSON.parse(localStorage.getItem("formdata")) || null );
      
  const signup = (data) => {
    setUser(localStorage.setItem("formdata", JSON.stringify(data)));
  };

  const logout = () => {
    setUser(localStorage.removeItem("formdata"));
  };
  return (
    <>
      <usercont.Provider value={{ user, signup, logout, a , userinfo}}>
        {children}
      </usercont.Provider>
    </>
  );
};

export default Userauth;
