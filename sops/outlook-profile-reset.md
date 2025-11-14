# SOP: Outlook Profile & Mailbox Access Issues

**Audience:** L1 Service Desk  
**Scope:** Users who cannot open Outlook, see errors, or are missing expected mail.

---

## 1. Symptoms

Common examples:

- Outlook stuck on **“Loading profile”**  
- Repeated password/MFA prompts  
- **“Cannot start Microsoft Outlook”** or **“Cannot open the Outlook window”**  
- Missing emails or folders  
- Shared mailbox not appearing

---

## 2. Quick Triage (User Side)

1. Confirm **device type**:
   - Corporate laptop / personal device / VDI.
2. Ask user to:
   - Reboot the device (if not done recently).  
   - Test **Outlook on the Web (OWA)** via browser.
3. Check **service status**:
   - Internal IT status page.  
   - Microsoft 365 Service Health for Exchange Online.

If OWA is broken for multiple users → likely **service issue** → follow Email Outage Runbook.

---

## 3. Licensing & Mailbox Checks (M365)

1. Open **M365 admin center**.
2. Search for the user.
3. Verify:
   - Correct license assigned (includes Exchange Online).  
   - Mailbox is active (not hidden/disabled).  
   - Mailbox quota not exceeded.

If license is missing/incorrect:
- Assign correct SKU per policy.  
- Ask user to sign out and back in after 5–10 minutes.

Document any license change in the ticket.

---

## 4. Local Outlook Profile Fix (Windows)

Use this when OWA works but desktop Outlook fails.

1. Ask the user to **fully close Outlook**.
2. On the device:
   - Open **Control Panel → Mail** (or search “Mail (Microsoft Outlook)”).
   - Click **Show Profiles…**.
3. Create a **new profile**:
   - Name it like `Outlook-<date>`.
   - Choose **“Prompt for a profile to be used”** or set new profile as default.
4. Start Outlook with the new profile:
   - Complete sign-in and MFA if prompted.  
   - Wait for mailbox to initialise.

5. Confirm:
   - No startup error.  
   - Inbox and calendar visible.  
   - Search works after indexing.

If the new profile works, you can delete the old one later with user approval.

---

## 5. Shared Mailbox Issues

If user is missing a shared mailbox:

1. In **M365 admin center / Exchange admin**:
   - Check **Full Access** and **Send As** permissions for the shared mailbox.
2. If permissions just added:
   - Explain it can take ~30 minutes to appear automatically.
3. To add manually:
   - Outlook → File → Account Settings → Account Settings…  
   - Double-click account → More Settings → Advanced → Add…  
   - Enter shared mailbox name and confirm.

Update the ticket with permission changes and manual steps taken.

---

## 6. Ticket Notes

Capture:

- Whether **OWA** works or fails.  
- License state before/after.  
- Whether a **new profile** was created.  
- Any shared mailbox permission changes.  
- Final outcome (fully fixed, workaround, escalated).

---

## 7. Escalation

Escalate to **L2 / Messaging** when:

- Multiple users are affected across teams/sites.  
- Service Health indicates a wider issue but you lack access to full diagnostics.  
- Mailbox appears corrupted or cannot be opened even with a new profile.  
- There are errors involving transport rules, litigation hold, or retention policies outside L1 scope.

