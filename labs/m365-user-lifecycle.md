# Lab: Microsoft 365 User Lifecycle (Joiner → Mover → Leaver)

**Goal:** Practise the full lifecycle of a user in Microsoft 365.

---

## Scenario

You receive three requests over a few weeks:

1. New starter (joiner)  
2. Department change (mover)  
3. User leaving the company (leaver)

Use a test tenant or lab environment.

---

## Part 1 – Joiner

1. Create a **new user**:
   - UPN: `test.user@contoso.onmicrosoft.com` (or similar).  
   - Fill display name, job title, department, office.

2. Assign licences:
   - Microsoft 365 E3/E5/Business (or similar).  
   - Ensure Exchange Online and Teams are included.

3. Verify:
   - Mailbox is provisioned.  
   - User can sign in and access Outlook/Teams.

Write a short ticket note summarising what you did.

---

## Part 2 – Mover

User moves from **Support** to **Finance**.

1. Update:
   - Department / job title.  
   - Manager (if applicable).

2. Adjust access:
   - Add user to new groups/Teams for Finance.  
   - Remove from old Support-specific groups.

3. Confirm:
   - Access to new shared mailboxes / SharePoint sites.  
   - Old access is removed where appropriate.

Document what changed and why.

---

## Part 3 – Leaver

User leaves the organisation.

1. Follow your lab’s **leaver policy**, for example:
   - Block sign-in.  
   - Remove licences after retention period.  
   - Convert mailbox to shared if needed.  
   - Give manager access to mailbox/OneDrive if policy allows.

2. Consider:
   - Data retention (mailbox / OneDrive).  
   - Legal or audit requirements.

Write the steps you took as if you were closing a real leaver ticket.

---

## Reflection

- Which steps are safe for **L1** to perform alone?  
- Which steps should require **manager/HR approval**?  
- What would you add to a permanent SOP based on this lab?

