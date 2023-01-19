const Admin = require('../models/admin.model');
const ValidateAdmin = require('../validation/admin.validation');
const bcrypt = require('bcrypt');
const res = require('express/lib/response');
const { findOne } = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const JWT_SECRET = "hfdjskqlfkds123hjfd)à_@fdsqfdsk5780865065à()=fls"

const AddAdmin = async (req, res) => {
    const { username, password, errors, isValid } = ValidateAdmin(req.body)
    const hashedPwd = await bcrypt.hash(req.body.password, 10)
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            await Admin.findOne({ username: req.body.username })
                .then(async (exist) => {
                    if (exist) {
                        errors.username = "This username already exists";
                        res.status(404).json(errors);
                    } else {
                        await Admin.create({
                            username: req.body.username,
                            password: hashedPwd,
                        });
                        res.status(201).json({ message: 'User added succesfully' });
                    }
                })
        }
    } catch (error) {
        console.log(error.message);
    }

}

const FindAllAdmin = async (req, res) => {
    try {
        const data = await Admin.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const login = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
        return res.json({ error: "User doesn't exist" })
    }
    if (await bcrypt.compare(password, admin.password)) {
        const token = jwt.sign({}, JWT_SECRET)

        if (res.status(201)) {
            return res.json({ status: "Ok", data:token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({status:"error", error:"Invalid Password"})

}


module.exports = {
    AddAdmin,
    FindAllAdmin,
    login,
}