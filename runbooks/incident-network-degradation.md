# Runbook: Network Degradation / Slow Connectivity

**Owner:** Network / Infrastructure  
**Audience:** L1–L2 Service Desk

---

## 1. Detection

- Users report:
  - Slowness accessing internal apps/sites.  
  - Choppy VOIP/Teams calls.  
  - Intermittent disconnections.

- Monitoring shows:
  - High latency / packet loss.  
  - WAN link saturation.

---

## 2. L1 Checks

1. Confirm **scope**:
   - One user, one floor, whole site, or multiple sites.

2. Ask user:
   - Wired or Wi-Fi?  
   - Is everything slow or just one app/site?

3. Quick steps:
   - Reboot device.  
   - If on Wi-Fi, move closer to AP or try wired.

4. Check **service status** for the affected app (if SaaS).

If many users at same site are affected → raise a **network incident**.

---

## 3. L2 Network Investigation

1. Check monitoring dashboards:
   - WAN utilisation  
   - Switches/routers status  
   - Wi-Fi controllers

2. Look for:
   - Interfaces with high errors/discards.  
   - Unusual bandwidth spikes.

3. Run tests (from core network where possible):
   - `ping` and `traceroute` to key services.  
   - Confirm DNS is resolving correctly.

4. Review:
   - Recent change logs (firewall, routing, QoS).

---

## 4. Workarounds

Depending on findings:

- Temporarily **throttle / pause** non-critical heavy traffic if tools allow.  
- Route traffic via backup link (if available).  
- Suggest users:
  - Use wired where possible.  
  - Avoid heavy non-business streaming during incident.

---

## 5. Communication

- Open a **master incident**.  
- Inform affected sites/teams about:
  - Impact.  
  - Known workarounds.  
  - Expected next update time.

---

## 6. Resolution

1. Confirm metrics back to normal.  
2. Validate with sample users from impacted sites.  
3. Close master incident and linked tickets with:
   - Root cause (if known).  
   - Time window of impact.  
   - Any permanent fix/changes applied.

