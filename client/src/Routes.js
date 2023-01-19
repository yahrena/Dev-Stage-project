import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import BooksList from "./pages/BooksList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import {Container, Card} from 'react-bootstrap';
// import Authentication from "./components/Authentication/Authentication";
import './styles/loginStyles.css';
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";
import Diagrams from "./pages/Diagrams";
import { RequireToken } from "./components/Authentication/auth";

const Routes = () => {
    return (
        <>
        <Switch>
                <Route exact path="/">
                    <HomePage class="bg"/>
                </Route>
                <Route exact path="/studentslist">
                    <RequireToken>
                        <div class="alert alert-dark"><h1 class="text-uppercase"><center>Student List</center></h1></div>
                        <StudentList/>
                    </RequireToken>
                </Route>
                <Route exact path="/addstudent">
                    <RequireToken>
                        <div class="alert alert-dark"><h1 class="text-uppercase"><center>Add Student</center></h1></div>
                        <AddStudent/>
                    </RequireToken>
                </Route>
                <Route exact path="/diagrams">
                    <RequireToken>
                        <div class="alert alert-dark"><h1 class="text-uppercase"><center>Diagrams</center></h1></div>
                        <Diagrams/>
                    </RequireToken>
                </Route>
                
        </Switch></>
    );
};

export default Routes;
