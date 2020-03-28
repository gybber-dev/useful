const Confirm = require('prompt-confirm');
/* class MyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}


const iterator = new MyIterator(['This', 'is', 'iterator'])
const gen = generator(['This', 'is', 'iterator'])

// for (const val of gen) {
//   console.log('Value: ', val)
// }

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

class Operator{
  constructor(){
    this.correct = [];
    this.uncorrect = [];
  }

  show(string){
    const prompt = new Confirm(`barcod: ${string.barcode} of good: ${string.good}. Correct?`);
    prompt.ask(function(answer) {
      if(answer){
        this.correct.push(string);
      }else{
        this.uncorrect.push(string);
      }
    });
  }
}
*/
// class Generator {
//   constructor (pull){
//     this.collection = pull;
//   }
//
//   start (collection){
//     console.log(collection);
//   }
// };

function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
};

const pull = [
  {
    barcode: '00000000001',
    good: "good1"
  },
  {
    barcode: '00000000003',
    good: "good2"
  },
  {
    barcode: '00000000004',
    good: "good4"
  }
]

// let gen = new Generator(pull);
// let task = new Operator(pull);

const arr = [1, 2, 3]



const gen = generator(arr);
// console.log(pull.length)
for (const val of gen) {
  console.log(gen.next())
}
