<#
.SYNOPSIS
    Generates a report of large files for disk cleanup planning.

.DESCRIPTION
    Scans a path recursively and outputs a list of files above a
    specified size threshold. By default it DOES NOT delete anything.

.PARAMETER Path
    Root path to scan. Default is C:\.

.PARAMETER MinSizeMB
    Minimum file size (in MB) to include in the report. Default is 100 MB.

.PARAMETER OutputPath
    Optional CSV path to export results.

.EXAMPLE
    .\Disk-Cleanup-Report.ps1 -Path "C:\" -MinSizeMB 500

.EXAMPLE
    .\Disk-Cleanup-Report.ps1 -Path "C:\Users" -MinSizeMB 200 -OutputPath ".\large-files.csv"
#>

[CmdletBinding()]
param(
    [string]$Path = "C:\",
    [int]$MinSizeMB = 100,
    [string]$OutputPath
)

Write-Host "=== Disk Cleanup Report ===" -ForegroundColor Cyan
Write-Host "Path      : $Path"
Write-Host "Min size  : $MinSizeMB MB"
if ($OutputPath) { Write-Host "Output CSV: $OutputPath" }
Write-Host ""

if (-not (Test-Path -Path $Path)) {
    Write-Error "Path '$Path' does not exist."
    exit 1
}

$thresholdBytes = $MinSizeMB * 1MB

$files = Get-ChildItem -Path $Path -File -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.Length -ge $thresholdBytes } |
    Sort-Object Length -Descending |
    Select-Object FullName,
                  @{Name = "SizeMB"; Expression = { [math]::Round($_.Length / 1MB, 2) }}

if (-not $files) {
    Write-Host "No files larger than $MinSizeMB MB found in '$Path'."
    return
}

$files | Format-Table -AutoSize

if ($OutputPath) {
    try {
        $files | Export-Csv -Path $OutputPath -NoTypeInformation -Encoding UTF8
        Write-Host ""
        Write-Host "Report exported to $OutputPath"
    } catch {
        Write-Warning "Failed to export CSV: $($_.Exception.Message)"
    }
}

Write-Host ""
Write-Host "Review this list and decide what can be safely deleted or archived BEFORE removing anything."

