import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import styled from 'styled-components'

const Page = styled.div``
const Hello = styled.h1``
const LoginDiv = styled.form``
const Input = styled.input``
const SignIn = styled.button``

const initialState = {
  username: "",
  password: ""
}

const Login = () => {
  
  const [user, setUser] = useState(initialState)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const {push} = useHistory()

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const submitLogin = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', user)
    .then(res => {
      console.log(res.data.payload) // this is the token
      localStorage.setItem('token', res.data.payload)
      push('/private-route')
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  return (
    <Page>
      <Hello>Hello. Sign in.</Hello>
      <LoginDiv
        onSubmit={submitLogin}
      >
        <Input
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <SignIn>Sign in</SignIn>
      </LoginDiv>
    </Page>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.