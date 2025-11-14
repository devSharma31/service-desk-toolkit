# Lab: Azure AD / Entra Basics for Service Desk

**Goal:** Get comfortable looking up users, groups and sign-in activity in Azure AD / Entra.

---

## 1. User Lookup

1. Open Azure AD / Entra admin portal.  
2. Search for a **test user**.  
3. Note:
   - Display name  
   - UPN  
   - Job title / department  
   - Account enabled/disabled state  

Write a short summary in your own words.

---

## 2. Group Membership

1. Find a **security group** or M365 group used for app access.  
2. View its **members**.  
3. Add your test user to the group.  
4. Remove them again.

Note how long changes take to appear in apps.

---

## 3. Sign-in Logs (Read Only)

1. Navigate to **Sign-in logs** for your test user.  
2. Look at:
   - Location / IP  
   - Application name  
   - Result (success / failure)  
   - Device/platform

Write down what would look **suspicious** (e.g., impossible travel, unknown device).

---

## 4. Conditional Access (Read Only)

1. Open the **Conditional Access** blade (view-only).  
2. Identify:
   - Any policies applied to “All users”.  
   - Any that enforce **MFA** or block risky sign-ins.

---

## 5. Reflection

Answer these for yourself:

- Which checks would you perform **before** resetting a password for a suspicious request?  
- How would you summarise your findings in a ticket to the **Security / IAM** team?

