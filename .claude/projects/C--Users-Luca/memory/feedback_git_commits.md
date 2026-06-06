---
name: feedback-git-commits
description: User requires regular git commits and pushes to GitHub after each unit of work so no progress is ever lost
metadata: 
  node_type: memory
  type: feedback
  originSessionId: e9c05a6c-a74d-453d-a318-0878804accb7
---

Commit and push to GitHub after every meaningful unit of work — never let changes pile up locally.

**Why:** User explicitly wants to ensure work is never lost; pushing regularly to GitHub is the safety net.

**How to apply:** After finishing any logical chunk (file created, feature added, bug fixed), run `git add`, `git commit` with a clean imperative-mood message, then `git push`. Flag to the user if no remote is configured rather than silently skipping.
