const res = require('express/lib/response');
const Student = require('../models/student.model');
const ValidateStudent = require('../validation/student.validation')

const AddStudent = async (req, res) => {
    const { errors, isValid } = ValidateStudent(req.body)

    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            await Student.findOne({ code: req.body.code })
                .then(async (exist) => {
                    if (exist) {
                        errors.code = "This student's code already exists";
                        res.status(404).json(errors);
                    } else {
                        await Student.create(req.body);
                        res.status(201).json({ message: 'Student added succesfully' });
                    }
                })
        }
    } catch (error) {
        console.log(error.message);
    }

}

const FindAllStudent = async (req, res) => {
    try {
        const data = await Student.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const FindSingleStudent = async (req, res) => {
    try {
        const data = await Student.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const UpdateStudent = async (req, res) => {
    const { errors, isValid } = ValidateStudent(req.body)
    try {
        if (!isValid) {
            res.status(404).json(errors)
        } else {
            const data = await Student.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            )
            res.status(201).json(data)
        }
    } catch (error) {
        console.log(error.message)
    }

}

const DeleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({ _id: req.params.id })
        res.status(201).json({ message: 'Student deleted succesfully' })
    } catch (error) {
        console.log(error.message)
    }

}

const CountAllStudent = async (req, res) =>{
    try {
        const data = await Student.count()
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json('Error: '+error)
        console.log(error.message)
    }
}

const CountBranch = async (req, res) => {
    try {
        const data = await Student.aggregate([
            {$group:{_id:"$branch",nbr:{$sum:1}}}
            
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json('Error: '+error)
        console.log(error.message)
    }
}



module.exports = {
    AddStudent,
    FindAllStudent,
    FindSingleStudent,
    UpdateStudent,
    DeleteStudent,
    CountAllStudent,
    CountBranch
}