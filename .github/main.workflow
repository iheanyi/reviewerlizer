workflow "Generate Review" {
  on = "issues"
  resolves = ["new-action"]
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

action "new-action" {
  uses = "owner/repo/path@ref"
  needs = ["deliver thoughtful review"]
}

workflow "say hi" {
  on = "push"
  resolves = ["docker://alpine"]
}

action "docker://alpine" {
  uses = "docker://alpine"
  args = "echo \"Hello\""
}
