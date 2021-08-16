import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode"

function DashBoard() {
  const history = useHistory();
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [claims, setClaims] = useState(null);

  useEffect(()=>{
    const jwt = sessionStorage.getItem('jwt');
    console.log(jwt);
    if(jwt) {
      setClaims(jwt_decode(jwt));
    }else {
      setRedirectToLogin(true);
    }
  },[])


  useEffect(()=>{
      if(redirectToLogin){
          history.push('/login');
      }
  }, [redirectToLogin])

  
  return (
    <div className="App">
      {claims && <h1>Hello, {claims.name}</h1> }
      <div>
        <img src='./DashBoardPic.PNG' />
      </div>
    </div>
  );
}

export default DashBoard;
