workflow "Generate Reviews" {
  resolves = ["deliver thoughtful review"]
  on = "issues"
}

action "only (re)opened issues" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "action 'opened|reopened'"
}

action "deliver thoughtful review" {
  uses = "./"
  needs = ["only (re)opened issues"]
  secrets = ["GITHUB_TOKEN"]
}
