import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/loginStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsPeople, BsKey, BsBook } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import logo from "../assets/logobook.png";
import { useState } from "react";
import axios from "axios";
// import { setToken } from "../components/Authentication/auth";
import { fetchToken, setToken } from "../components/Authentication/auth";
import { useHistory } from 'react-router';
import { toast } from "react-toastify";

const HomePage = () => {
  // const [login, setLogin] = useState({
  //   username: props.login ? props.login.username : '',
  //   password: props.login ? props.login.password : ''
  // });
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const [errorMsg, setErrorMsg] = useState('');
  // const { username, password } = login;

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const values = [username, password];
  //     let errorMsg = '';

  //     const allFieldsFilled = values.every((field) => {
  //       const value = `${field}`.trim();
  //       return value !== '' && value !== '0';
  //     });

  //     if (allFieldsFilled) {
  //       const login = {
  //         id: uuidv4(),
  //         username,
  //         password,
  //         date: new Date()
  //       };
  //       props.handleSubmit(login);
  //     } else {
  //       errorMsg = 'Please verify all the fields';
  //     }
  //     setErrorMsg(errorMsg);

  // };
  //Login Node
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (username !== '' & password !== '') {
  //     try {
  //       const response = await axios.post("http://localhost:3700/api/admin", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //         body: JSON.stringify({
  //           username,
  //           password,
  //         })
  //       });
  //       // return response.data;
  //       console.log(response.data);
  //       // const response = await axios.post("http://localhost:3700/api/admin",
  //       //       // { username: username, password: password },
  //       //       // { headers: { "Content-Type": "application/x-www-form-urlencoder" } }
  //       //       {
  //       //         // method:"POST",
  //       //         headers: {
  //       //           "Content-Type": "application/json",
  //       //           Accept: "application/json",
  //       //           "Access-Control-Allow-Origin": "*",
  //       //         },
  //       //         body: JSON.stringify({
  //       //           username,
  //       //           password,
  //       //         })
  //       //       },
  //       // )
  //       // .then((res)=>res.json(response))
  //       //     // .then((res) => res.json())
  //       //     .then((data) => {
  //       //       console.log(data, "userRegister")
  //       //     })

  //       // if (response.status === 201) {
  //       //   console.log(response.data);
  //       //   // setToken(response.data)
  //       //   // fetchToken();
  //       //   // history.push('../pages/StudentList');
  //       //   // console.log(setToken);
  //       // }
  //     }
  //     catch (error) {
  //       // toast.error("Username or Password don't match", { position: 'top-center' })
  //       console.log("error");
  //     }
  //   }
  // }

  //  ####Login Python######
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username !== '' & password !== '') {
      try {
    const response = await axios.post("http://localhost:8000/token",
          { username: username, password: password },
          // { headers: { "Content-Type": "application/x-www-form-urlencoder" } }
          {
            headers: {
              "Content-Type": "multipart/form-data",
              // Accept: "application/json",
              // "Access-Control-Allow-Origin": "*",
            },
            // body: JSON.stringify({
            //   username,
            //   password,
            // })
          },
        )
        if (response.status === 200) {
          console.log(response.data);
          setToken(response.data)
          fetchToken();
          history.push('/studentslist');
          // console.log(setToken);
        }
      }
      catch (error) {
        toast.error("Username or Password don't match", { position: 'top-center' })
        console.log("error");
      }
    }
  }


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  // switch (name) {
  //   case 'quantity':
  //     if (value === '' || parseInt(value) === +value) {
  //       setBook((prevState) => ({
  //         ...prevState,
  //         [name]: value
  //       }));
  //     }
  //     break;
  //   case 'price':
  //     if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
  //       setBook((prevState) => ({
  //         ...prevState,
  //         [name]: value
  //       }));
  //     }
  //     break;
  //   default:
  // setLogin((prevState) => ({
  //   ...prevState,
  //   [name]: value
  // }));
  // }
  // };





  return (
    <>
      <div class="wrapper">
        <div class="logo">
          <img src={logo} alt="" />
          {/* <BsBook/> */}
        </div>
        {errorMsg && <p className="errorMsg alert alert-danger"><center>{errorMsg}</center></p>}
        <div class="text-center mt-4 name">
          Login
        </div>
        <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
            {/* <span class="far fa-user" icon={["far", "coffee"]}></span> */}
            <BsPeople />
            {/* <FontAwesomeIcon icon="coffee"/> */}
            <input type="text" name="username" id="userName" placeholder="Username"
              value={username}
              // onChange={handleInputChange}
              onChange={(event) => { setusername(event.target.value) }}
            />
          </div>
          <div class="form-field d-flex align-items-center">
            {/* <span class="fas fa-key"></span> */}
            <BsKey />
            <input type="password" name="password" id="pwd" placeholder="Password"
              value={password}
              onChange={(event) => { setpassword(event.target.value) }}
            />
          </div>
          <button class="btn mt-3" onClick={handleSubmit}>Login</button>
        </form>
        {/* <div class="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
