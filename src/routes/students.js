const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { studentValidation } = require('../utils/validation');
const { authenticate, requireStaff } = require('../middleware/auth');

// Todas as rotas de alunos precisam de autenticação
router.use(authenticate);

// Rotas dos alunos (protegidas)
router.get('/', requireStaff, studentController.getAllStudents);
router.get('/:id', requireStaff, studentController.getStudentById);
router.post('/', requireStaff, studentValidation, studentController.createStudent);
router.put('/:id', requireStaff, studentController.updateStudent);
router.delete('/:id', requireStaff, studentController.deleteStudent);

module.exports = router;
