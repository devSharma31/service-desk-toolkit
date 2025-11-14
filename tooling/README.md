# Tooling – Workstation Bootstrap for IT Support

This folder contains example package lists for quickly setting up an **IT Support / Service Desk** workstation.

The goal is to show:

- I understand which tools frontline support engineers actually use.  
- I can standardise workstation setup using **winget** and **Chocolatey**.

---

## Files

- `winget-packages.txt` – Core tools list for Windows using **winget**  
- `choco-packages.txt` – Equivalent list using **Chocolatey**

These lists are meant as **starting points** and can be adapted to match a company’s standard build.

---

## Example Usage (winget)

```powershell
# Run in an elevated PowerShell session

Get-Content .\tooling\winget-packages.txt | ForEach-Object {
    if ($_ -and -not $_.StartsWith('#')) {
        winget install --id $_ --accept-source-agreements --accept-package-agreements
    }
}
```
## Example Usage (Chocolatey)
```
# After installing Chocolatey:

Get-Content .\tooling\choco-packages.txt | ForEach-Object {
    if ($_ -and -not $_.StartsWith('#')) {
        Invoke-Expression $_
    }
}
```
