'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //   Get answer
//   1.1.
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Set Condition for Input Number 
    // 1.2. 
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // 4.
    this.displayResult();
    this.displayResult('string');
  },

// 3.
  displayResult(type = 'array') {
    if (type === 'array') {
    //   console.log(this.answers);
    } else if (type === 'string'){
        // console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

// 2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


// .5
//   Call method is used for a different this keyword
//  if you want  to use a new Array, and existing function 
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResult.call({answers: [5, 2, 3]}, 'string');
poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]});

// Code Challenge #2

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    })
})();

// header.addEventListener('click', function()){
    // header.style.color = 'blue'
// }