\---  
name: resume-ats-optimizing  
description: This skill should be used when one or more resumes need to be scored, diagnosed, and rewritten for ATS performance. It identifies parsing issues, missing keywords, weak bullets, and seniority mismatches, then produces a clean ATS-safe rewritten resume with a before/after score. Treats every uploaded file as a separate candidate variant and never merges versions.  
\---

\# Resume ATS Optimizing

Analyze, score, and rewrite resumes to maximize ATS pass-through rates and recruiter readability.

\#\# Core Principle  
Treat every uploaded resume as a separate candidate variant.  
Never merge, average, or cross-contaminate outputs across versions.  
Label every output block with the file name and inferred role.

\#\# Phase 1 — Role Assignment  
\- Identify the role family each resume targets: PM, EM, Analytics, Engineering, Consulting, Marketing, Operations, etc.  
\- If the target role is ambiguous, infer the top two possibilities and confirm with the user before proceeding  
\- State inference confidence: high / medium / low

\#\# Phase 2 — ATS Diagnosis  
Score each resume out of 100 across eight dimensions:

| Dimension         | What to evaluate                                                       |  
|-------------------|------------------------------------------------------------------------|  
| Parsing safety    | No tables, columns, icons, text boxes, or embedded headers             |  
| Section clarity   | Standard labels: Summary, Experience, Skills, Education, Projects      |  
| Keyword alignment | Hard skills, tools, and domain terms matched to target role            |  
| Evidence quality  | Bullets follow action \+ scope \+ result structure                       |  
| Seniority fit     | Title, years, and bullet scope are consistent                          |  
| Metrics density   | Quantified outcomes in at least 60% of bullets                         |  
| Summary strength  | Specific, role-targeted, not generic                                   |  
| Skills quality    | Role-aligned, not a random dump                                        |

Per dimension: score, one-line reason, specific issue flagged.  
Overall: total weighted ATS score, top 10 issues by impact, top 10 missing keywords, weakest bullets list.

\#\# Phase 3 — Rewrite  
For each resume produce:  
\- Rewritten headline and summary (role-targeted, keyword-dense)  
\- Rewritten experience bullets (action \+ scope \+ measurable result)  
  Mark unknown metrics as: \[add quantified outcome here\] — never fabricate  
\- Rewritten skills section aligned to target role  
\- Recommended section order for optimal ATS and human parsing

\#\# Phase 4 — Final Output  
Deliver per resume:  
\- Full ATS-safe plain-text resume (no tables, columns, icons, or decorative formatting)  
\- Before and after ATS score with explanation in 5–7 bullets  
\- 5 residual interview risks still present, if any

\#\# Multi-Version Output  
Label every section clearly:

  \--- RESUME 1: \[filename\] — \[role\] \---  
  \[full output\]

  \--- RESUME 2: \[filename\] — \[role\] \---  
  \[full output\]

End with a cross-version comparison: strongest overall version, best-fit version per role family, any contradictions between versions.

\#\# Rules  
\- Never invent employers, metrics, certifications, or skills  
\- Never embed tables, icons, or columns inside resume output text  
\- Prompt the user for missing metrics — do not estimate or fabricate  
\- Run phases sequentially; do not jump to rewrite before completing diagnosis

