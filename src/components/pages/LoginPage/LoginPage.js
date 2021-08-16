import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router-dom";
import {authencateUser} from '../../../apiClient/authClient';


const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(false);

  const loginSubmit = () => {
    authencateUser(username, password)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem('jwt',response.data.id_token);
        history.push('/')    
      })
      .catch((err)=>{
        setIsError(true);
      })    
  }

  return (

    <Container className='App'>
    <div className='login'>
      <div>
        Log In Form
      </div>
        {isError && <div>There is some error with your credential</div> }
      <div>
      <TextField
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
          />
          </div>
          <div>
        <TextField
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        </div>
      <Button type='submit' variant='contained' color="primary" onClick={()=>loginSubmit()}>
        Log In
      </Button>
    </div>
    </Container>
  );
}

export default LoginPage;