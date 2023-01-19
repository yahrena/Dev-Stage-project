import { useLocation,Redirect } from "react-router-dom";

export const setToken = (token)=>{
    localStorage.setItem('token',token)
    console.log(token);
}

export const fetchToken = (token) =>{
    return localStorage.getItem('token')
}

export function RequireToken({children}){
    let auth = fetchToken()
    let location = useLocation()

    if(!auth){
        return <Redirect to='/' state = {{from: location}}/>;
    }
    return children;
}