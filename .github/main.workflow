workflow "Generate Review" {
  on = "pull_request"
  resolves = ["Reviewerlizer"]
}

action "Reviewerlizer" {
  uses = "./"
}
