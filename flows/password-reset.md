# Password Reset

When: user can’t sign in; forgot password; lockout.
Pre-checks: verify identity (2 data points), MFA status, last sign-in.
Steps:
1) Reset password (force change at next sign-in).
2) Guide user through login + MFA prompt.
3) Confirm success in sign-in logs.
Escalate if: CA policy blocks; risk-based prompts; repeated MFA failures.
