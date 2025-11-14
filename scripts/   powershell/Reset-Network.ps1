<#
.SYNOPSIS
    Resets basic network components on a Windows machine.

.DESCRIPTION
    Flushes DNS cache, renews IP address, and resets Winsock.
    Designed for L1/L2 use in labs or with user approval.

    This script SUPPORTS -WhatIf and -Confirm.

.EXAMPLE
    .\Reset-Network.ps1 -Confirm

.EXAMPLE
    .\Reset-Network.ps1 -WhatIf
#>

[CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = "High")]
param()

Write-Host "=== Network Reset ===" -ForegroundColor Cyan

if ($PSCmdlet.ShouldProcess("Local network configuration", "Reset DNS, IP and Winsock")) {

    Write-Host "Flushing DNS cache..." -ForegroundColor Cyan
    ipconfig /flushdns | Out-Null

    Write-Host "Releasing IP address..." -ForegroundColor Cyan
    ipconfig /release | Out-Null

    Write-Host "Renewing IP address..." -ForegroundColor Cyan
    ipconfig /renew | Out-Null

    Write-Host "Resetting Winsock..." -ForegroundColor Cyan
    netsh winsock reset | Out-Null

    Write-Host ""
    Write-Host "Network reset commands executed. A reboot may be required for full effect." -ForegroundColor Yellow
} else {
    Write-Host "No changes made (operation cancelled or running with -WhatIf)." -ForegroundColor Yellow
}

