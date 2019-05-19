'use strict';

const colors = require('ansi-colors');
const { Select } = require('enquirer');

const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  footer: colors.blue('(Use spacebar to select and enter for finish)'),
  multiple: true,
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});

prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
