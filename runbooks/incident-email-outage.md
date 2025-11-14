# Runbook: Exchange Online / Email Outage

**Owner:** Messaging / Cloud team  
**Audience:** L1–L2 Service Desk

---

## 1. Detection

Triggers:

- Multiple users report email not sending/receiving.  
- Outlook/OWA not loading or timing out.  
- Monitoring alerts for Exchange Online.

---

## 2. Initial L1 Assessment

1. Confirm **scope**:
   - Users, teams, sites, or global.  
2. Check:
   - If users can access **other services** (Teams, SharePoint).  
3. Open **Microsoft 365 Service Health**:
   - Look for active incidents related to Exchange Online.

If a Microsoft incident is posted:
- Link user tickets to the master incident.  
- Inform users using approved comms template.

---

## 3. L2 Checks (If No Public Incident)

1. Check internal monitoring:
   - Mail gateways / connectors  
   - Queues on hybrid servers (if applicable)
2. Review:
   - Recent changes (transport rules, security settings).  
   - Any pattern in affected users (region, domain).

3. Perform repro:
   - Test send/receive with a **known good test account**.  
   - Try both internal and external recipients.

---

## 4. Workarounds

Examples:

- If Outlook desktop fails but OWA works:  
  → Advise users to work in a browser temporarily.

- If internal mail works but external does not:  
  → Likely gateway/connector issue.

Document any official workaround in the master incident.

---

## 5. Communication

During an active incident:

- Provide updates every **30–60 minutes** (or as per policy).  
- Include:
  - Current status.  
  - Known impact.  
  - Workaround.  
  - Time of next update.

---

## 6. Resolution & Closure

When resolved:

1. Confirm mail flow is healthy:
   - New messages send/receive.  
   - Backlogged mail is delivered.

2. Update all linked tickets:
   - Mark as resolved.  
   - Add a short root-cause summary if available.

3. Post-Incident Review:
   - Capture timeline, root cause, and lessons learned.  
   - Update related SOPs/KBs if needed.

