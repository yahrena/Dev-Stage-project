const isEmpty = require('./isEmpty');
const validator = require('validator');



module.exports =  function ValidateStudent(data){
    let errors = {}
    data.code = !isEmpty(data.code) ? data.code : ""
    data.name = !isEmpty(data.name) ? data.name : ""
    data.fname = !isEmpty(data.fname) ? data.fname : ""
    data.address = !isEmpty(data.address) ? data.address : ""
    data.tel = !isEmpty(data.tel) ? data.tel : ""
    data.branch = !isEmpty(data.branch) ? data.branch : ""

    if(validator.isEmpty(data.code)){
        errors.code = "Code required";
    }
    if(validator.isEmpty(data.name)){
        errors.name = "Name required";
    }
    if(validator.isEmpty(data.fname)){
        errors.fname = "First name required";
    }
    if(validator.isEmpty(data.address)){
        errors.address = "Address required";
    }
    if(validator.isEmpty(data.tel)){
        errors.tel = "Contact required";
    }
    if(validator.isEmpty(data.branch)){
        errors.branch = "Branch required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}