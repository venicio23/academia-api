const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware para verificar autenticação
const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Acesso negado. Token não fornecido.'
      });
    }

    // Verificar e decodificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Buscar usuário
    const user = await User.findById(decoded.userId);
    
    if (!user || !user.ativo) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido.'
      });
    }

    // Adicionar usuário à requisição
    req.user = user;
    next();

  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Token inválido.',
      error: error.message
    });
  }
};

// Middleware para verificar se é admin
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado. Apenas administradores podem acessar.'
    });
  }
  next();
};

// Middleware para verificar se é admin ou funcionário
const requireStaff = (req, res, next) => {
  if (!['admin', 'funcionario'].includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      message: 'Acesso negado. Permissão insuficiente.'
    });
  }
  next();
};

module.exports = {
  authenticate,
  requireAdmin,
  requireStaff
};
