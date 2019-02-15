const fs = require('fs')
const generate = require('./generate')
const write = require('./write')

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

const event = JSON.parse(fs.readFileSync('/github/workflow/event.json'))
const review = generate(QUESTIONS)

console.log(event);

;(async function() {
  await write({
    owner: event.repository.owner.login,
    repo: event.repository.name,
    number: event.issue.number,
    review
  })
})()
