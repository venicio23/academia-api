const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../utils/validation');
const { authenticate, requireAdmin } = require('../middleware/auth');

// Rotas públicas
router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

// Rotas protegidas
router.get('/verify', authController.verificarToken);
router.get('/users', authenticate, requireAdmin, authController.listarUsuarios);

// Rota de informações (temporária)
router.get('/', (req, res) => {
  res.json({ 
    message: 'Sistema de autenticação JWT funcionando!',
    endpoints: {
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
      verify: 'GET /api/auth/verify',
      users: 'GET /api/auth/users (admin only)'
    },
    roles: ['admin', 'funcionario', 'professor']
  });
});

module.exports = router;
