# SOP: Printer Troubleshooting (On-site Users)

**Audience:** L1 Service Desk  
**Scope:** Users unable to print, wrong printer, or stuck jobs.

---

## 1. Initial Questions

Ask the user:

1. Printer name / ID (from sticker or list).  
2. Is **anyone else** using that printer successfully?  
3. Is this a **new** issue or ongoing?  
4. Are they printing from:
   - One app or many apps?
   - One device or multiple devices?

---

## 2. Physical Printer Checks

If you can reach someone near the printer:

1. Confirm:
   - Printer is **powered on**.  
   - No visible **error** (paper jam, no toner, offline).  
2. Ask them to:
   - Check paper tray and toner/ink levels.  
   - Clear any obvious paper jams following the on-screen instructions.

If there is a hardware fault or consumables issue, log details and route to **Facilities / Vendor** as per policy.

---

## 3. User Device Checks (Windows)

1. Confirm the user is on the **corporate network** (LAN or corporate Wi-Fi).  
2. Ask the user to:
   - Save their work and close heavy apps.  
   - Try printing a simple test page (e.g., from Notepad or a PDF).

3. On the device:
   - Open **Settings → Devices → Printers & scanners**.  
   - Confirm the correct printer is:
     - Installed.  
     - Set as **default** (if required).

4. If jobs are stuck:
   - Open the printer queue.  
   - Cancel stuck jobs.  
   - Ask user to print again.

---

## 4. Re-adding the Printer

If the printer is missing or clearly corrupted:

1. Remove the existing printer entry.  
2. Add printer using the documented method:
   - **Print server path** (e.g. `\\printserver\PrinterName`), or  
   - Direct **IP address** of the printer.

3. Print a **Test Page** from Printer Properties.

---

## 5. Network Checks (If Allowed)

For advanced L1 / lab use:

- Run a quick `ping <printer-ip>` from the user’s machine.  
- If ping fails while others can print:
  - Possible local firewall / routing issue.
- If no one can ping:
  - Possible **network / printer** outage → follow Network/Printer incident runbook.

---

## 6. Ticket Notes

Log:

- Printer name / ID and location.  
- Whether issue is **user-specific** or affects others.  
- Physical checks performed.  
- Device steps (queue cleared, printer re-added, test page result).  
- Any networking observations.

---

## 7. Escalation

Escalate to **Network / Infrastructure / Vendor** when:

- Multiple users cannot print to the same printer and basic checks are done.  
- Printer is unreachable on network from multiple machines.  
- There is a recurring hardware fault.

