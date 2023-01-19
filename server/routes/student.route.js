const express = require('express');
const { AddStudent, FindAllStudent, FindSingleStudent, UpdateStudent, DeleteStudent, CountAllStudent, CountBranch } = require('../controllers/student.controller');
const { AddAdmin, FindAllAdmin, login } = require('../controllers/admin.controller');
const router = express.Router();

/*add student */
router.post('/student', AddStudent)

/*find all students */
router.get('/student', FindAllStudent)

/* find single student */
router.get('/student/:id', FindSingleStudent)

/*update student */
router.put('/student/:id', UpdateStudent)

/*delete student */
router.delete('/student/:id', DeleteStudent)

/*count all student */
router.get('/nombretotal', CountAllStudent)

/*count by branch */
router.get('/nombreByBranch', CountBranch)

/*add user */
// router.post('/admin', AddAdmin)

/*find all admin */
router.get('/admin', FindAllAdmin)

/*sign in */
router.post('/admin', login)



module.exports = router;