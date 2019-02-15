const Octokit = require('@octokit/rest')
const octokit = new Octokit({auth: `token ${process.env.GITHUB_TOKEN}`})

module.exports = function({owner, repo, number, person, review}) {
  const body = `# ${person}\n\n${review}`
  return octokit.issues.createComment({owner, repo, number, body})
}
