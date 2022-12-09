const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

function emailValidation(req, res, next) {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
   next();
}

function passwordValidation(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  } 
   next();
}

function tokenValidation(req, res, next) {
 const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }
  next();
}

function nameValidation(req, res, next) {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }
  if (name.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }
  next();
}

function ageValidation(req, res, next) {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    });
  }
  if (age < 18) {
    return res.status(400).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
}

function rateTalkValidation(req, res, next) {
  const { talk } = req.body;
  if (talk.rate === undefined) {
    return res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  }
  if (!(talk.rate >= 1 && talk.rate <= 5)) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  next();
}

function talkWatchedValidation(req, res, next) {
  const { talk } = req.body;
  const dataRegex = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
  if (!talk.watchedAt) {
    return res.status(400).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  }
  if (!dataRegex.test(talk.watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  rateTalkValidation(req, res, next);
}

function talkValidation(req, res, next) {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório',
    });
  }
  talkWatchedValidation(req, res, next);
}

module.exports = { 
  generateToken, 
  emailValidation, 
  passwordValidation,
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
 };