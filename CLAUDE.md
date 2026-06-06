# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow

After completing any meaningful unit of work, commit the changes and push to GitHub. Do not accumulate large batches of unrelated changes before committing.

**Commit discipline:**
- Commit after each logical change (feature added, bug fixed, file created/updated)
- Write clean, descriptive commit messages in the imperative mood ("Add X", "Fix Y", "Update Z")
- Always push after committing so work is never only local
- Never use `--no-verify` or skip hooks unless the user explicitly asks

**Pushing:**
- Push to the current branch's remote after every commit unless the user says otherwise
- If no remote is set up yet, flag it to the user rather than silently skipping the push

## Memory System

A persistent memory system lives at `C:\Users\Luca\.claude\projects\C--Users-Luca\memory\`. It stores context about the user, ongoing projects, feedback, and references across sessions. Read `MEMORY.md` in that directory at the start of relevant conversations. Write new memories when learning something worth preserving across sessions.
