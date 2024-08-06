import { body } from 'express-validator';


// Validation middleware for register

const registerValidationRules = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .matches(/^\S*$/)
    .withMessage('Username should not contain spaces'),

  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^\S*$/)
    .withMessage('Password should not contain spaces')
];

// Validation middleware for login

const loginValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^\S*$/)
    .withMessage('Password should not contain spaces')
];

export { registerValidationRules, loginValidationRules };
