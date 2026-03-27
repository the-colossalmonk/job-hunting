\---  
name: job-hunt-orchestrating  
description: This skill should be used when coordinating a full-cycle job search across one or more resume versions. It maps each resume to target roles and search keywords, builds a company exclusion list from the user's LinkedIn employment history, routes each version independently to job-hunt-sourcing, and assembles a final prioritized application plan with before-applying checklists and reusable role-specific prompt variants.  
\---

\# Job Hunt Orchestrating

Coordinate end-to-end job search operations across multiple resume versions with full isolation between versions.

\#\# Core Principle  
Every resume version runs its own complete pipeline.  
Job lists, target titles, and search keywords are never shared across versions.  
A job appearing in multiple versions must be listed in each independently.

\#\# Phase 1 — Resume Intake  
\- Accept all final resume versions cleared by hiring-manager-calibrating  
\- Confirm role family and seniority for each (carry forward from earlier steps if available)  
\- Do not accept any version rated Not Yet unless the user explicitly overrides

\#\# Phase 2 — Exclusion List Construction  
Parse the user's LinkedIn URL or provided employment history and extract:  
\- Current employer  
\- All past employers  
\- Known subsidiaries, parent companies, and holding entities of each  
Label the result: Master Exclusion List  
Confirm it with the user before any search begins.  
Pass it to job-hunt-sourcing for every version's search.

\#\# Phase 3 — Role Mapping (per resume)  
For each version produce:  
\- 3–5 primary target job titles  
\- 2–3 acceptable adjacent titles  
\- 1–2 stretch titles  
\- Resume-specific ATS search keywords  
\- Must-have keywords to weight heavily when scoring job matches

\#\# Phase 4 — Search Routing  
Send each resume version to job-hunt-sourcing with:  
\- Role family, target titles, and search keywords  
\- Master Exclusion List  
\- Active tracks: A (India onsite/hybrid), B (India remote), C (global remote)  
\- Job count target per version  
\- User's location, seniority, sector, and work-type preferences  
Maintain strict version isolation. Never route two versions together.

\#\# Phase 5 — Application Plan Assembly (per resume)  
After sourcing returns results, assemble:

Prioritized Job Table:  
\- High-probability: fit score 80 and above  
\- Medium-probability: fit score 60–79  
\- Stretch: fit score below 60 but strategic  
\- Sort within groups: fit score descending, then company stage, then track, then location

Before-Applying Checklist:  
\- Resume headline matches the target job title  
\- LinkedIn headline is aligned with this resume version  
\- Portfolio and project links are live  
\- No resume claim contradicts the LinkedIn profile

Track-Wise Summary:  
\- Jobs found per track  
\- Highest-yield portals  
\- Sectors with most openings  
\- Thin tracks and reason

\#\# Phase 6 — Prompt Variant Generation  
After all versions are complete, generate 4–6 reusable standalone prompt variants:  
\- Software Engineering  
\- Product Management / Product Owner  
\- Data Analytics / Business Intelligence  
\- Consulting / Strategy  
\- Marketing / Growth  
\- Operations / Project Management

Each variant must include the full four-skill pipeline, all search tracks, all portals,  
LinkedIn exclusions, fit scoring, and minimum job count.

\#\# Multi-Version Output  
Label every section clearly:

  \--- RESUME 1: \[filename\] — \[role\] \---  
  \[role mapping \+ job table \+ checklist \+ summary\]

  \--- RESUME 2: \[filename\] — \[role\] \---  
  \[role mapping \+ job table \+ checklist \+ summary\]

\#\# Rules  
\- Never recommend the same company more than once within a single resume's list  
\- Flag any conflict between LinkedIn data and resume claims  
\- Never merge job lists across resume versions  
\- Confirm the Master Exclusion List with the user before search begins  
