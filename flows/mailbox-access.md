# Mailbox Access (Permissions/Quota)

When: user can’t access mailbox or delegated mailbox.
Checks:
- License present? Mailbox provisioned?
- Quota near limit? Delegation/SendAs/FullAccess granted?
Steps:
1) Verify permissions; add if approved.
2) Ask user to relaunch client/restart session.
3) Check mailbox stats; recommend cleanup if near quota.
Escalate: litigation hold; corruption; transport rules conflict.
