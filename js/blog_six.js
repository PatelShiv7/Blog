const questions_answers = [
    ['What is the closest planet to earth?'],
    ['Mars', 'Venus', 'Jupiter'],
    ['Who are you?'],
    ['Eujeen', 'Shiv', 'Jacob'],
    ['What name is used on the movie 22 Jump Street that became a meme?'],
    ['Jeff', 'Alex', 'Geoff']
]

let score = 0;
let correct;
let correctAnswer = [];
let incorrectAnswer = [];

for (let i = 0; i < questions_answers.length; i+=2) {
    alert(questions_answers[i + 1].join(', '))
    answer = prompt(questions_answers[i][0]);
    if (answer == questions_answers[i + 1] [0].toLowerCase()) {
        alert(`Yes, ${answer} is correct!`);
        score ++;
        correct = questions_answers[i + 1].shift()
        correctAnswer.push(correct)

    } else {
        alert(`Sorry, ${answer} is not correct! The correct answer is ${questions_answers[i + 1] [0]}!`);
        incorrectAnswer.push(answer)
    }
}
