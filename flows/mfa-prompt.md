# MFA Prompt Troubleshooting

Symptom: MFA prompt missing or loops.
Checks:
- Is MFA enforced for the user/tenant?
- Time skew / device offline / app notifications blocked?
Fix:
- Re-register MFA; test via aka.ms/mfasetup (org variant).
- Clear authenticator app cache; try SMS/alternate method.
Escalate: CA policies; device non-compliance; token/sign-in risk.
