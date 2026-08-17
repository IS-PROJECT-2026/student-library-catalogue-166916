Project Submission Report
1. Student Details
Full Name: Narcisse Zandizo
GitHub Username: Zandykanani
Email: zandykanani@gmail.com
2. Deployed Project Link
Live GitHub Pages URL: https://is-project-2026.github.io/student-library-catalogue-166916/
3. Reflection — Grounded in Your Git History
Rules: Every answer below must include a direct link to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.

Marks: A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = 5 marks total

A. Your Best Commit
Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

Commit URL: https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/commit/9092ce2b115467ffee4444f5f0c2262c405a196c
Why this one? Uses a clear fix type, describes exactly what was resolved, and closes the issue in the footer for traceability.]

B. A Mistake or Struggle
Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke.

Link to the evidence: https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/41
What happened and how did you recover? My first attempt at the modify/delete conflict produced "Already up to date" because main hadn't changed since my delete branch was created. I recovered by creating a new branch to modify the file again, merging it into main, then retrying the merge on my delete branch, which triggered the real conflict.
C. A Pull Request You're Proud Of
Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

PR URL: https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/40
What did you check before merging? I confirmed the diff only added the new file, matched conventional commit format, and referenced issue #40 before merging.
D. One Thing You Would Do Differently

What would you change? I would set up the evidence folder and issue numbers before starting any conflict work, since I had to backtrack and manually relocate misnamed screenshot files partway through.
Link to the evidence of the original decision: https://github.com/IS-PROJECT-2026/student-library-catalogue-166916/pull/<real PR number for docs/40-add-conflict-evidence>

4. Screenshots of Key GitHub Features
Demonstrate your workflow mechanics by embedding your screenshots below.

CRITICAL FOR WORKING IMAGES: Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and paste (Ctrl+V / Cmd+V) your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

A. Milestones and Issues
Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.

<img width="1559" height="716" alt="image" src="https://github.com/user-attachments/assets/06f42476-d7ca-4a0e-bfee-5bc9c39ac6a9" />

Caption: My three milestones (User Interface & Foundation, Catalogue & Search, User Features & Release) all fully completed, each linked to granular tracking issues.
B. Project Board
Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).

<img width="1892" height="853" alt="image" src="https://github.com/user-attachments/assets/6f313a40-a6fc-493c-843b-7c0488930080" />
<img width="1898" height="582" alt="image" src="https://github.com/user-attachments/assets/8c93950e-ae0f-4158-9e59-df57cb0a7b1c" />



Caption: My Kanban board showing issues moved across To Do, In Progress, and Done as work progressed.
C. Branching Architecture
Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., feat/, fix/, style/).

<img width="1579" height="834" alt="image" src="https://github.com/user-attachments/assets/dd92f6e9-6685-4c0a-9834-4d1e182ca602" />


Caption: My branch list showing feat/, fix/, and docs/ branches each named with their linked issue number.
D. Pull Requests & Traceability
Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.

<img width="1344" height="846" alt="image" src="https://github.com/user-attachments/assets/9bbea255-a717-405f-8969-0e88a946c70e" />


Caption: PR for feat/38-add-faq-page, referencing and closing issue #38.
5. Merge Conflict Evidence
You must engineer three merge conflicts, each triggered by a different cause from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

Marks: Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = 5 marks total

Conflict 1 — Full Chronology
What cause did you use? Same-line content conflict — two branches independently edited the exact same line of the same file

Step 1: Generating the Clash
Screenshot showing the merge attempt and the conflict warning.

<img width="916" height="573" alt="image" src="https://github.com/user-attachments/assets/cd5720f9-920c-4b23-bcbc-6a69fecb746d" />


Caption: Merge attempt between feat/26-update-landing-title and feat/28-update-landing-title-alt, both editing the same hero title line, producing a content conflict.
Step 2: Inside the Code Editor (Conflict Markers)
Screenshot showing the raw, unresolved conflict markers (<<<<<<< HEAD, =======, >>>>>>>) in your editor.

<img width="916" height="573" alt="image" src="https://github.com/user-attachments/assets/7c263812-f7ff-4c2f-9801-870e37345daa" />


Caption: Raw conflict markers in index.html showing both competing title versions before resolution.
Step 3: Resolution & Clean Merge
Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.

<img width="1355" height="791" alt="image" src="https://github.com/user-attachments/assets/ccd2cb76-3326-48ab-860b-0e5ee4cb9a18" />


Caption: The conflict resolved and merged cleanly into main via the pull request.
Conflict 2 — Different Cause
What cause did you use? Modify/delete conflict — one branch modified about.html while another branch deleted it

Why does this cause trigger a conflict? Git cannot determine whether the file should exist with the new content or be removed entirely, since one side changed it while the other removed it.

<img width="1356" height="559" alt="image" src="https://github.com/user-attachments/assets/d968ccfb-2930-4b1b-b4b3-9cd042297a8c" />


Caption: Modify/delete conflict between the about-page content branches (#29, #32) and the about-page deletion branch (#30).
Conflict 3 — Different Cause
What cause did you use? Add/add conflict — two branches independently created a new file with the identical filename but different content.

Why does this cause trigger a conflict? There is no common ancestor version of the file for git to compare against, so git cannot automatically decide which version, or which parts of each, should be kept

<img width="1364" height="561" alt="image" src="https://github.com/user-attachments/assets/3efa81cc-dc1a-4569-9fa9-35d5c039a200" />


Caption:  Add/add conflict between feat/37-add-faq-page and feat/38-add-faq-page-alt, both independently creating faq.html.
6. Feedback & Evaluation
To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!

 Anonymous Evaluation Form: Course & Instructor Evaluation
