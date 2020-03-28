const Confirm = require('prompt-confirm');
const prompt = new Confirm(`barcod: Correct?`);
prompt.ask(function(answer) {
  console.log(answer);
});
