const generate = require('./generate')

const QUESTIONS = [
  {
    q: 'What are the key things this Hubber did well, should continue to do or do differently? Provide clear examples.',
    isSatisfied(score) { return score.score > 1 }
  },
  {
    q: 'What are the most important things this Hubber should focus on to make themselves, the team, and org more successful? Provide clear examples.',
    isSatisfied(score) { return score.score < -1 }
  },
  {
    q: 'Do you have any additional comments you would like to provide?',
    isSatisfied() { return true}
  }
]

const output = generate(QUESTIONS)

console.log(output)
console.log(JSON.parse(require('fs').readFileSync('/github/workflow/event.json')));
