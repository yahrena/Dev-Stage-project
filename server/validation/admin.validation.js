const isEmpty = require('./isEmpty');
const validator = require('validator');



module.exports =  function ValidateAdmin(data){
    let errors = {}
    data.username = !isEmpty(data.username) ? data.username : ""
    data.password = !isEmpty(data.password) ? data.password : ""

    if(validator.isEmpty(data.username)){
        errors.username = "Username required";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "Password required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}