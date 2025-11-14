<#
.SYNOPSIS
    Basic connectivity check script for Service Desk use.

.DESCRIPTION
    Pings a target host and, where supported, uses Test-NetConnection
    to gather basic network diagnostics.

.PARAMETER Target
    Hostname or IP address to test. Defaults to outlook.office365.com.

.PARAMETER Count
    Number of ping attempts. Default is 4.

.EXAMPLE
    .\Check-Connectivity.ps1 -Target "outlook.office365.com" -Count 5
#>

[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$Target = "outlook.office365.com",

    [int]$Count = 4
)

Write-Host "=== Connectivity Check ===" -ForegroundColor Cyan
Write-Host "Target : $Target"
Write-Host "Pings  : $Count"
Write-Host ""

# Basic ping
try {
    $pingResults = Test-Connection -ComputerName $Target -Count $Count -ErrorAction Stop
    $avg = ($pingResults | Measure-Object -Property ResponseTime -Average).Average
    Write-Host "Ping successful. Average latency: $([math]::Round($avg,2)) ms"
} catch {
    Write-Warning "Ping failed: $($_.Exception.Message)"
}

# Test-NetConnection (if available)
if (Get-Command Test-NetConnection -ErrorAction SilentlyContinue) {
    Write-Host ""
    Write-Host "Running Test-NetConnection..." -ForegroundColor Cyan
    try {
        $tnc = Test-NetConnection -ComputerName $Target -WarningAction SilentlyContinue
        $tnc | Select-Object ComputerName, RemoteAddress, PingSucceeded, TcpTestSucceeded, TraceRoute | Format-List
    }
    catch {
        Write-Warning "Test-NetConnection failed: $($_.Exception.Message)"
    }
} else {
    Write-Host ""
    Write-Host "Test-NetConnection not available on this system." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Connectivity check complete."

