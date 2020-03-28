// class MyMath {
//   constructor(initialValue = 0) {
//     this.num = initialValue
//   }
//
//   square() {
//     return this.num ** 2
//   }
//
//   cube() {
//     return this.num ** 3
//   }
// }
//
// class Command {
//   constructor(subject) {
//     this.subject = subject
//     this.commandsExecuted = []
//   }
//
//   execute(command) {
//     this.commandsExecuted.push(command)
//     return this.subject[command]()
//   }
// }
//
// const x = new Command(new MyMath(2))
//
// console.log(x.execute('square'))
// console.log(x.execute('cube'))
//
// console.log(x.commandsExecuted)


class Figure0 {
  constructor(defValue){
    this.form = defValue||'dot';
  }
  shape(form){
    this.form = form;
    console.log(`I've become ${this.form}`);
  }
};

class Figure1 {
  constructor(defValue){
    this.form = defValue||'dot';
    this.cache = [];  //  <------ храним список форм.
  }
  shape(form){
    this.cache.push(this.form)
    this.form = form;
    console.log(`I've become ${this.form}`);
  }

  undo(){
    this.form = (this.cache.length - 1)?
                this.cache.pop(): this.form; // <---- вызов последнего элемента из кэша
    this.shape(this.form);
    if (this.cache.length) this.cache.pop();  // компенсируем push, вызванный методом выше
  }
};

class Command {
  constructor(subject){
    this.subject = subject;
    this.cache = [];
  }

  execute(action, args){
    this.cache.push({action, args});
    return this.subject[action](...args);
  }

  undo(){
    if (this.cache.length - 1) this.cache.pop();
    const action = this.cache[this.cache.length - 1].action;
    const args = this.cache[this.cache.length - 1].args;
    return this.subject[action](...args);
  }
};

const fig = new Figure1();
console.log(fig);
fig.shape('round');
fig.shape('line');
fig.shape('square');
fig.shape('dot');
console.log(fig);
//
fig.undo();
fig.undo();
fig.undo();
fig.undo();
fig.undo();
fig.undo();
//
console.log(fig);
const div = new Command(new Figure0());
div.execute('shape', ['round']);
div.execute('shape', ['line']);
div.execute('shape', ['square']);
div.execute('shape', ['dot']);
console.log(div.cache)
div.undo();
div.undo();
div.undo();
div.undo();
console.log(div.cache)
