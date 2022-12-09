const fs = require('fs').promises;
const { join } = require('path');

const file = join(__dirname, '../talker.json');

const read = async () => {
    const content = await fs.readFile(file, 'utf-8');
    return JSON.parse(content);
};

const save = (content) => fs.writeFile(file, JSON.stringify(content));

module.exports = {
  read,
  save,
};