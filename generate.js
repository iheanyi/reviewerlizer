const Markov = require('markov-strings').default
const Sentiment = require('sentiment')
const fs = require('fs')


const data = fs.readFileSync('./corpus.txt', 'utf-8')
const chain = new Markov(data.split('\n'), {stateSize: 3})
const sentiment = new Sentiment()
chain.buildCorpus()

module.exports = function(questions) {
  return questions.map(q => {
    const response = chain.generate({
      maxTries: 100000,
      filter({string}) {
        const length = string.split(' ').length
        const score = sentiment.analyze(string)
        return length > 20 && q.isSatisfied(score)
      }
    }).string
    return `## ${q.q}\n\n${response}`
  }).join('\n\n\n')
}
