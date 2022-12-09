const express = require('express');
const { read, save } = require('../db/talker.db');
const { 
  tokenValidation, 
  nameValidation, 
  ageValidation, 
  talkValidation, 
} = require('../middlewares/validations');

const router = express.Router();

router.get('/talker/search', tokenValidation, async (req, res) => {
  const talkers = await read();
  const { q } = req.query; 
  const filteredTalkers = talkers.filter((talker) => {
    if (talker.name.includes(q)) {
      return talker;
    } 
    return null;
});
 res.status(200).json(filteredTalkers);
});

router.get('/talker', async (req, res) => {
  const readFile = await read();
  res.status(200).json(readFile);
});

router.get('/talker/:id', async (req, res) => {
  const readFile = await read();
  const { id } = req.params; 
  if (Number(id) > readFile.length) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  const talkerFind = readFile.find((talker) => talker.id === Number(id));
  res.status(200).json(talkerFind);
});

router.post('/talker', tokenValidation, 
nameValidation, ageValidation, talkValidation, async (req, res) => {
  const newTalker = req.body;
  const talkers = await read();
  newTalker.id = talkers.length + 1;
  talkers.push(newTalker);
  await save(talkers);
  res.status(201).json(newTalker);
});

router.put('/talker/:id', tokenValidation, 
nameValidation, ageValidation, talkValidation, async (req, res) => {
  const { id } = req.params;
  const changedTalker = req.body;
  changedTalker.id = Number(id);
  const talkers = await read();
  const changedTalkerList = talkers.map((talker) => {
    if (Number(talker.id) === Number(id)) {
      return changedTalker;
    }
    return talker;
  });
  save(changedTalkerList);
  return res.status(200).json(changedTalker);
});

router.delete('/talker/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const talkers = await read();
  const newList = talkers.filter((talker) => talker.id !== Number(id));
  await save(newList);
  return res.sendStatus(204);
});

module.exports = router;