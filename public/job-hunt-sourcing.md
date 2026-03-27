\---  
name: job-hunt-sourcing  
description: This skill should be used when real, verified job openings need to be found for a specific resume version across multiple portals and search tracks. It searches India onsite/hybrid, India remote, and global remote roles, scores each job for resume fit, returns direct application links, and organizes results into high-probability, medium-probability, and stretch categories. Always receives inputs from job-hunt-orchestrating before starting.  
\---

\# Job Hunt Sourcing

Find, verify, score, and organize live job openings across three geographic and work-type tracks.

\#\# Core Principle  
Receive all search parameters from job-hunt-orchestrating before beginning.  
Never fabricate a company name, job title, or URL.  
Always state the source portal for every result.  
Run independently per resume version.

\#\# Required Inputs  
Receive these from job-hunt-orchestrating before starting:  
\- Resume version identifier and role family  
\- Primary, adjacent, and stretch target titles  
\- Search keywords  
\- Master Exclusion List  
\- Active tracks  
\- Job count target  
\- Location, seniority, sector, and work-type preferences

\#\# Three Search Tracks

Track A — India Onsite and Hybrid:  
\- Naukri: broadest India corporate database, mid-senior depth  
\- LinkedIn Jobs: MNC, consulting, leadership, brand-driven roles  
\- WellFound: early-stage and growth-stage Indian startups  
\- Indeed India: diverse roles, all cities, entry to senior  
\- Unstop: campus to early-career, leadership programs, talent hunts  
\- Upler: freelance, project-based, flexible tech roles  
\- Internshala: internships, entry-level, short-term contracts

Track B — India Remote:  
\- Naukri with remote filter  
\- LinkedIn Jobs with remote filter  
\- Indeed India with remote filter  
\- WellFound with remote filter  
\- Remotive for India-listed roles

Track C — Global Remote (India-eligible only):  
\- We Work Remotely: largest global remote board, 4.5M+ visitors  
\- RemoteOK: tech, design, marketing, creative; strong global reach  
\- Arc.dev: vetted global remote developer and tech roles; India-friendly  
\- Turing: long-term remote contracts, vetted global companies  
\- Remotive: curated remote across tech, marketing, ops  
\- FlexJobs: verified remote and hybrid; low noise  
\- Crossover: full-time remote for US and global companies, India-eligible  
\- Remote.co: curated remote listings across all role types  
\- LinkedIn Jobs with Worldwide and Remote filters  
\- WellFound with remote filter, global scope

\#\# Default Job Count Split  
\- Track A: 50 per resume version  
\- Track B: 25 per resume version  
\- Track C: 25 per resume version  
\- Total minimum: 100 per version  
If user specifies remote-only: Track B 50, Track C 50\.

\#\# Search Process

Step 1 — Search:  
Search primary titles first, adjacent second, stretch third.  
Apply seniority, city, sector, and work-type filters throughout.  
Cross-check every result on at least two portals when possible.  
Apply Master Exclusion List before adding any result to output.

Step 2 — Verify:  
Flag stale, closed, or inconsistent listings. Never include them silently.  
For Track C: include only listings that explicitly state worldwide, open to India,  
APAC, or carry no geo-restriction.

Step 3 — Required Output Fields Per Job:  
\- Company: full legal or brand name  
\- HQ: city and country  
\- Title: exact title from listing  
\- Location: city or Remote or Global Remote  
\- Track: A, B, or C  
\- Sector: Fintech, SaaS, BFSI, Edtech, Consulting, E-commerce, etc.  
\- Company type: Startup, Scale-up, MNC, Consulting, PSU, Remote-first  
\- Work type: Full-time, Contract, Hybrid, Remote, Async, Part-time  
\- Compensation: currency and range if visible in listing  
\- Source: portal named explicitly on every row  
\- Link: direct application URL  
\- India note: Track C only — eligibility confirmation  
\- Why it fits: 2 bullets aligned to this specific resume  
\- Gaps: missing skills or experience vs. this resume  
\- Fit score: out of 100, broken into Skill match, Experience match, Role fit

Step 4 — Rank and Group:  
\- High-probability: 80 and above  
\- Medium-probability: 60–79  
\- Stretch: below 60 but strategic  
Sort within groups: fit score descending, then company stage, then track, then location.

Step 5 — Track Summary:  
After the full table: jobs per track, top portals by yield, top sectors, thin tracks with reason.

\#\# Multi-Version Output  
Label every section clearly:

  \--- RESUME 1: \[filename\] — \[role\] \---  
  \[job table \+ track summary\]

  \--- RESUME 2: \[filename\] — \[role\] \---  
  \[job table \+ track summary\]

\#\# Rules  
\- Never fabricate a company, title, or URL  
\- State source portal for every single row  
\- Flag unverifiable listings — never include them silently  
\- If count cannot be met, report exactly how many verified results were found and from which portals  
\- Do not reuse job lists across resume versions  
