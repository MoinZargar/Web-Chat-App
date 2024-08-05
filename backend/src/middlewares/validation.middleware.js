import { body } from 'express-validator';

// Validation middleware for register

const registerValidationRules = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('username name must be at least 3 characters long'),

  body('email')
    .isEmail()
    .withMessage('Invalid email address'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
];

// Validation middleware for login

const loginValidationRules = [
    body('email')
      .isEmail()
      .withMessage('Invalid email address'),
  
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long')
      .matches(/\d/)
      .withMessage('Password must contain a number')
  ];
  
  
  export { registerValidationRules, loginValidationRules};
