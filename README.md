# Service Desk Toolkit — L1/L2 SOPs • Runbooks • Scripts (Windows & M365)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![PowerShell](https://img.shields.io/badge/PowerShell-5.1%2B-5391FE?logo=powershell&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-10%2F11-blue)
![M365](https://img.shields.io/badge/Microsoft%20365-Admin-DB3B3B?logo=microsoft)
![Azure AD](https://img.shields.io/badge/Azure%20AD-Basics-0078D4?logo=microsoftazure&logoColor=white)

Front-line **Service Desk Knowledge Base** with safe automation and incident playbooks.  
**Live KB:** https://devsharma31.github.io/service-desk-toolkit/

> What this proves: I can **triage**, **communicate** clearly, and **automate** safely in L1/L2 environments across Windows 10/11 and Microsoft 365/Azure AD.

---

## Contents
- **sops/** — front-line procedures (password reset, Outlook profile, printer/VPN, ticket triage)
- **runbooks/** — incident guides (Exchange Online outage, network degradation) + SEV handoff template
- **scripts/** — safe PowerShell & Bash helpers (connectivity, network reset with `-Confirm`, M365 user audit, disk cleanup)
- **labs/** — practice flows (M365 user lifecycle, Azure AD basics, Windows troubleshooting)
- **tooling/** — `winget`/Chocolatey bootstrap lists
- **index.html + app.js + style.css** — a lightweight KB UI (GitHub Pages-ready)

---

Front-line **Service Desk Knowledge Base** with safe automation and incident playbooks.  
**Live KB:** https://devsharma31.github.io/service-desk-toolkit/

> What this proves: I can **triage**, **communicate** clearly, and **automate** safely in L1/L2 environments across Windows 10/11 and Microsoft 365/Azure AD.

---

## Quickstart

### Run a connectivity check (PowerShell, Windows)
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
.\scripts\powershell\Check-Connectivity.ps1 -Target "outlook.office365.com"
# Optional: network reset (approval switch required)
.\scripts\powershell\Reset-Network.ps1 -Confirm
```

DNS lookup (Bash, WSL/macOS/Linux):
```
bash scripts/bash/check_dns.sh outlook.office365.com
```

Open the UI

- Local: open index.html
- GitHub Pages: the Live KB link above

---

## Safety

Scripts are:
- Read-only or reversible by default.
- Any disruptive action requires an explicit -Confirm.
- Intended for lab / training use before touching production.

This mirrors real-world guardrails in enterprise environments.

---

## Handover Template (paste into the ticket)

- User:
- Ticket ID:
- Impact/Priority:
- Summary (1 line):
- Repro steps:
- What I tried (+ timestamps)
- Attachments:
- Why escalated (policy/permission boundary):

Goal: clean, auditable handover so L2/L3 doesn’t need to reverse-engineer what happened.

---

About / Tech Stack

- Tech: HTML, CSS, Vanilla JavaScript, PowerShell, Bash
- Platform focus:
    - Windows 10/11
    - Microsoft 365 (Exchange Online, basic admin)
    - Azure AD basics
- Hosting: GitHub Pages

This project is part of my journey towards IT Support / Cloud Support roles with a strong focus on:
- Structured triage 
- Clear written communication
- Safe, reversible automation
