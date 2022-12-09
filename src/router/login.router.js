const express = require('express');
// const generateToken = require('../middlewares/validations');
const { 
  generateToken, 
  emailValidation, 
  passwordValidation,
 } = require('../middlewares/validations');

const router = express.Router();

router.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = generateToken();
    res.status(200).json({ 
      token,
    });
});

module.exports = router;