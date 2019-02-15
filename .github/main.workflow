workflow "Generate Review" {
  on = "issue"
  resolves = ["deliver thoughtful review"]
}

action "only opened issues" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  args = "action opened"
}

action "deliver thoughtful review" {
  uses = "./"
  needs = ["only opened issues"]
}
