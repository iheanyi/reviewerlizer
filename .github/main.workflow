workflow "Generate Review" {
  on = "pull_request"
  resolves = ["review"]
}

action "review" {
  uses = "./"
}
