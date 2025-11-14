# SOP: VPN Connection Issues

**Audience:** L1 Service Desk  
**Scope:** Users unable to connect to corporate VPN or being disconnected frequently.

---

## 1. Initial Questions

Ask the user:

1. Device type and OS (Windows 10/11, macOS, mobile).  
2. VPN client name and version.  
3. Exact **error message** shown.  
4. Where they are connecting from (home, hotel, mobile hotspot).  
5. Has VPN ever worked on this device before?

---

## 2. Basic Checks

1. Ask the user to:
   - Reboot the device.  
   - Connect to a **trusted, stable network** (avoid captive portals at first).  

2. Confirm:
   - Internet access works **without VPN** (browse to a public site).  

3. If internet itself is broken, troubleshoot that first.

---

## 3. Account & Authentication

1. Check the user’s AD / Entra account:

   - Enabled vs disabled  
   - Password expired or near expiry  

2. If password is expired / unknown:
   - Follow the **Password Reset SOP**.  
   - Ask user to log into a web app (e.g., OWA) **before** re-trying VPN.

3. For MFA-protected VPN:
   - Confirm they can successfully complete MFA for another app (e.g., Teams).

If they cannot, fix MFA first.

---

## 4. Client-Side Steps (Windows Example)

1. Confirm correct VPN profile selected.  
2. Ask user to:
   - Disconnect and reconnect.  
   - If possible, toggle between Wi-Fi and wired.

3. Check common causes:
   - Incorrect username format (UPN vs DOMAIN\user).  
   - Wrong saved password (clear and re-enter).

4. In case of repeated failures:
   - Collect screenshot of the error.  
   - Note timestamp for correlation with logs.

---

## 5. Network / Location Considerations

1. If connecting from a **public / hotel network**:
   - Some networks block VPN protocols/ports.  
   - Ask user to test from:
     - Home network or  
     - Mobile hotspot (if policy allows).

2. If VPN works on hotspot but not home Wi-Fi:
   - Likely local router or ISP issue.  
   - User may need to reboot router / contact ISP.

---

## 6. Escalation Triggers

Escalate to **Network / Security** when:

- Multiple users in same area/country report similar VPN errors.  
- Error relates to certificate, route, or tunnel configuration.  
- There are recent firewall / VPN gateway changes.  
- User has valid account and good network but cannot connect from any location.

Include in the escalation:

- Username  
- Device type & OS  
- VPN client/version  
- Error text and timestamp  
- Locations tested (home, hotspot, etc.)

---

## 7. Ticket Notes

Document:

- All networks tested and outcomes.  
- Any password / MFA fixes done.  
- Screenshots or error codes.  
- Whether issue is user-specific or widespread.

