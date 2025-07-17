const { body } = require('express-validator');

// Validações para criação/atualização de aluno
const studentValidation = [
  body('nome')
    .notEmpty()
    .withMessage('Nome é obrigatório')
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres'),
  
  body('email')
    .isEmail()
    .withMessage('Email deve ter um formato válido')
    .normalizeEmail(),
  
  body('telefone')
    .notEmpty()
    .withMessage('Telefone é obrigatório')
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)
    .withMessage('Telefone deve ter o formato (11) 99999-9999'),
  
  body('cpf')
    .notEmpty()
    .withMessage('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    .withMessage('CPF deve ter o formato 000.000.000-00'),
  
  body('dataNascimento')
    .isISO8601()
    .withMessage('Data de nascimento deve ser uma data válida'),
  
  body('plano.tipo')
    .isIn(['mensal', 'trimestral', 'semestral', 'anual'])
    .withMessage('Tipo de plano deve ser: mensal, trimestral, semestral ou anual'),
  
  body('plano.valor')
    .isNumeric()
    .withMessage('Valor do plano deve ser um número')
    .custom((value) => {
      if (value <= 0) {
        throw new Error('Valor do plano deve ser maior que zero');
      }
      return true;
    }),
  
  body('plano.dataInicio')
    .isISO8601()
    .withMessage('Data de início do plano deve ser uma data válida'),
  
  body('plano.dataFim')
    .isISO8601()
    .withMessage('Data de fim do plano deve ser uma data válida')
    .custom((value, { req }) => {
      if (new Date(value) <= new Date(req.body.plano.dataInicio)) {
        throw new Error('Data de fim deve ser posterior à data de início');
      }
      return true;
    }),
  
  body('modalidades')
    .optional()
    .isArray()
    .withMessage('Modalidades deve ser um array'),
  
  body('modalidades.*')
    .isIn(['musculacao', 'natacao', 'zumba', 'pilates', 'yoga', 'crossfit', 'spinning'])
    .withMessage('Modalidade inválida'),
  
  body('status')
    .optional()
    .isIn(['ativo', 'inativo', 'suspenso'])
    .withMessage('Status deve ser: ativo, inativo ou suspenso')
];

// Função para validar CPF
const isValidCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
    return false;
  }
  
  const digits = cpf.split('').map(el => +el);
  
  for (let j = 0; j < 2; j++) {
    let sum = 0;
    for (let i = 0; i < 9 + j; i++) {
      sum += digits[i] * ((10 + j) - i);
    }
    let checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
    if (checkDigit !== digits[9 + j]) return false;
  }
  
  return true;
};

// Validações para registro de usuário
const registerValidation = [
  body('nome')
    .trim()
    .notEmpty()
    .withMessage('Nome é obrigatório')
    .isLength({ min: 2, max: 100 })
    .withMessage('Nome deve ter entre 2 e 100 caracteres'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email é obrigatório')
    .isEmail()
    .withMessage('Email deve ter um formato válido')
    .normalizeEmail(),

  body('senha')
    .notEmpty()
    .withMessage('Senha é obrigatória')
    .isLength({ min: 6 })
    .withMessage('Senha deve ter pelo menos 6 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Senha deve conter pelo menos: 1 letra minúscula, 1 maiúscula e 1 número'),

  body('role')
    .optional()
    .isIn(['admin', 'funcionario', 'professor'])
    .withMessage('Role deve ser: admin, funcionario ou professor')
];

// Validações para login
const loginValidation = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email é obrigatório')
    .isEmail()
    .withMessage('Email deve ter um formato válido')
    .normalizeEmail(),

  body('senha')
    .notEmpty()
    .withMessage('Senha é obrigatória')
];

module.exports = {
  studentValidation,
  isValidCPF,
  registerValidation,
  loginValidation
};
