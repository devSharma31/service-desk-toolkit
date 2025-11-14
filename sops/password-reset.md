# SOP: Password Reset & MFA Verification

**Audience:** L1 Service Desk  
**Systems:** Windows 10/11, Azure AD / Microsoft 365  
**Purpose:** Safely reset a user’s password and help with MFA without weakening security.

---

## 1. Scope

Use this SOP when:

- A user cannot sign in due to a **forgotten password**, or  
- The user is blocked at **MFA** (authenticator / SMS / email) and needs help regaining access.

Do **not** use this SOP if:

- There are signs of **account compromise** (unfamiliar devices, locations, security alerts).  
  → Escalate to Security / L2 according to the Security Incident Runbook.

---

## 2. Prerequisites

- You are logged into the **Service Desk tools** with appropriate permissions.
- You can verify the user’s identity using at least **two verification factors**, for example:
  - Employee ID / staff number  
  - Manager’s name  
  - Date of birth (if policy allows)  
  - Last 4 digits of registered phone number  
  - Recent ticket ID or HR reference

Follow local policy for acceptable proof.

---

## 3. Identity Verification

1. Greet the user and confirm **full name** and **department**.
2. Ask for at least **two** items from the approved verification list.
3. Cross-check details in:
   - HR/people system  
   - Microsoft 365 / Azure AD profile  
   - Internal phone directory
4. If verification **fails**:
   - Politely explain you cannot proceed for security reasons.  
   - Log the attempt in the ticket.  
   - Escalate to Security if behaviour seems suspicious.

> Never reset passwords or bypass MFA for an unverified user.

---

## 4. Password Reset (Azure AD / M365)

1. Open the **Microsoft 365 admin center** or **Azure portal**.
2. Locate the user by **UPN** (user@company.com) or display name.
3. Confirm:
   - Account is **Enabled**.  
   - Correct license is assigned (no expired/missing license).

4. Select **Reset password**:
   - Generate a temporary password OR set “user must change password at next sign-in”.
   - Use a strong, random value if you must read it out.

5. Communicate the temporary password:
   - Prefer a **secure channel** (corporate SMS/portal/email) per policy.
   - If by phone, ask the user to **repeat it back** carefully.

6. Ask the user to:
   - Sign out of all sessions in browsers and desktop apps.
   - Sign in with the new password.
   - Complete the mandatory password change if prompted.

7. Confirm successful login:
   - Ask them to open Outlook/Teams and send a quick test message.

---

## 5. MFA Help / Reset

Use this if the user is stuck at the MFA prompt.

1. Ask what changed:
   - New phone?  
   - Authenticator app removed?  
   - Lost/stolen phone?

2. Go to the **Azure AD / Entra admin center**:
   - Open the user profile → **Authentication methods**.

3. Options (depending on policy):

   - **Re-register MFA:**  
     - Clear existing methods or require MFA re-registration.  
     - Guide user to set up Microsoft Authenticator / alternate method again.

   - **Temporary access pass / MFA bypass:**  
     - Only use if explicitly allowed.  
     - Keep validity as short as possible.

4. Ask the user to:
   - Attempt sign-in again.  
   - Complete MFA setup or challenge.

5. Confirm:
   - They can access at least one key service (Outlook, Teams, SharePoint).

---

## 6. Ticket Notes

Record clearly:

- Reason: `Password reset + MFA assistance`
- Identity checks used
- Actions:
  - Password reset via which portal
  - MFA reset / re-registration / temp pass
- Outcome:
  - Successful / partial / failed
- Any follow-up:
  - “User will re-enrol MFA this evening on new device”, etc.

---

## 7. Escalation

Escalate to **L2 / Security** if:

- Identity cannot be verified.
- Sign-in history shows suspicious activity.
- Password reset / MFA changes are blocked by policy.
- Multiple password reset attempts from different locations within a short period.

