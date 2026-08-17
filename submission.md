Project Submission Report
1. Student Details
[Narcisse Zandizo]
GitHub Username: [Zandykanani]
[zandykanani@gmail.com]
2. Deployed Project Link
Live GitHub Pages URL: [Live GitHub Pages URL: https://is-project-2026.github.io/student-library-catalogue-166916/] 
3. Reflection — Grounded in Your Git History
Rules: Every answer below must include a direct link to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.

Marks: A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = 5 marks total

A. Your Best Commit
Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

Commit URL: [https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/commit/9092ce2b115467ffee4444f5f0c2262c405a196c]
Why this one? [Why this one? Uses a clear fix type, describes exactly what was resolved, and closes the issue in the footer for traceability.]
B. A Mistake or Struggle
Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke.

Link to the evidence: [https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/32]
What happened and how did you recover? [My first attempt at the modify/delete conflict produced "Already up to date" because main hadn't changed since my delete branch was created. I recovered by creating a new branch to modify the file again, merging it into main, then retrying the merge on my delete branch, which triggered the real conflict.]
C. A Pull Request You're Proud Of
Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

PR URL: [https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/40]
What did you check before merging? [I confirmed the diff only added the new file, matched conventional commit format, and referenced issue #40 before merging.]
D. One Thing You Would Do Differently
I would set up the evidence folder and issue numbers before starting any conflict work, since I had to backtrack and manually relocate misnamed screenshot files partway through.

What would you change? [1–2 sentences] [Link to the evidence of the original decision: https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/<real number>]
4. Screenshots of Key GitHub Features
Demonstrate your workflow mechanics by embedding your screenshots below.

CRITICAL FOR WORKING IMAGES: Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and paste (Ctrl+V / Cmd+V) your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

A. Milestones and Issues
Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.

[PASTE YOUR MILESTONE SCREENSHOT DIRECTLY HERE]

Caption: [Write a brief sentence describing your milestones here]
B. Project Board
Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).

[PASTE YOUR PROJECT BOARD SCREENSHOT DIRECTLY HERE]

Caption: [Write a brief sentence describing your board state here]
C. Branching Architecture
Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., feat/, fix/, style/).

[PASTE YOUR BRANCHING SCREENSHOT DIRECTLY HERE]

Caption: [Write a brief sentence describing your branch list here]
D. Pull Requests & Traceability
Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

Caption: [Write a brief sentence describing your PR and what issue it closes]
5. Merge Conflict Evidence
You must engineer three merge conflicts, each triggered by a different cause from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

Marks: Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = 5 marks total

Conflict 1 — Full Chronology
What cause did you use? [Same-line content conflict — two branches independently edited the exact same line of the same file]

Step 1: Generating the Clash
Screenshot showing the merge attempt and the conflict warning.

[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE]

Caption: [Describe which two branches collided and the warning received]
Step 2: Inside the Code Editor (Conflict Markers)
Screenshot showing the raw, unresolved conflict markers (<<<<<<< HEAD, =======, >>>>>>>) in your editor.

[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE]

Caption: [Explain what caused the dispute and your reasoning for the final version]
Step 3: Resolution & Clean Merge
Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.

[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE]

Caption: [Describe the final state after resolution]
Conflict 2 — Different Cause
What cause did you use? [Name the type of conflict cause — must be different from Conflict 1]

Why does this cause trigger a conflict? [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

Caption: [Brief description of the conflicting branches and file]
Conflict 3 — Different Cause
What cause did you use? [Name the type of conflict cause — must be different from Conflicts 1 and 2]

Why does this cause trigger a conflict? [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

Caption: [Brief description of the conflicting branches and file]
6. Feedback & Evaluation
To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!

 Anonymous Evaluation Form: Course & Instructor Evaluation