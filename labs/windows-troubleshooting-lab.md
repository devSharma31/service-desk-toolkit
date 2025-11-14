# Lab: Windows 10/11 Basic Troubleshooting

**Goal:** Practise a structured approach to common Windows endpoint issues.

Use a test VM or non-production device.

---

## Scenario 1 – No Internet

User says: “I can’t access any websites.”

1. Check basics:
   - Is **Airplane mode** off?  
   - Is Wi-Fi enabled and connected?

2. Ask user:
   - Are others in the same location also affected?  
   - Has anything changed recently (moved desks, new router, etc.)?

3. On the device:
   - Run `ipconfig /all` and note:
     - IP address  
     - Default gateway  
     - DNS servers

4. Try:
   - Disconnect/reconnect Wi-Fi.  
   - If allowed, `ipconfig /flushdns`.

5. Test:
   - Ping gateway IP.  
   - Ping a public host (if permitted in lab).

Write down what you would log in the ticket.

---

## Scenario 2 – Slow Machine

User says: “My laptop is painfully slow.”

1. Ask:
   - Since when?  
   - Any new software installed or updates recently?

2. Open **Task Manager**:
   - Check CPU, memory, disk usage.  
   - Identify any process using a high percentage.

3. Steps:
   - Close unnecessary applications.  
   - Check free disk space on C:.  
   - Reboot if not done recently.

4. Optional:
   - Run a basic AV scan (if available).  
   - Check startup apps and disable non-essential ones (per policy).

Write a short **mini-SOP** in your own words based on what you did.

---

## Scenario 3 – App Not Launching

User says: “Application X won’t open.”

1. Confirm:
   - Exact application name and version.  
   - Whether it works for other users.

2. Steps:
   - Try launching from Start menu and from the install folder.  
   - Check for any on-screen error and capture it.  
   - Try running as different user (if policy allows).  
   - Repair or reinstall app (lab only).

Note what you would escalate and what evidence you would give to L2/L3.

