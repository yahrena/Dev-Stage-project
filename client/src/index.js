import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import { RequireToken } from "./components/Authentication/auth";
import HomePage from "./pages/HomePage";
// import './styles.scss';

ReactDOM.render(
    <>
        <ToastContainer />
        <Router>
                <App />
        </Router></>,
    document.getElementById("root")
);
