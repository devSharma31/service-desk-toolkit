<#
.SYNOPSIS
    Basic Microsoft 365 user audit helper.

.DESCRIPTION
    Retrieves basic information about a user from Microsoft 365 / Azure AD.
    Intended for lab/demo use to show how L1/L2 could standardise checks.

    Requires the appropriate modules and permissions, for example:
      - AzureAD or Microsoft.Graph
      - ExchangeOnlineManagement (for mailbox stats)

.PARAMETER UserPrincipalName
    UPN of the user (e.g. user@contoso.com).

.EXAMPLE
    .\M365-User-Audit.ps1 -UserPrincipalName "user@contoso.com"
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$UserPrincipalName
)

Write-Host "=== M365 User Audit ===" -ForegroundColor Cyan
Write-Host "User: $UserPrincipalName"
Write-Host ""

# NOTE:
# The actual connection commands will depend on your environment.
# In a real environment, you might do:
#   Connect-MgGraph -Scopes "User.Read.All","Directory.Read.All"
#   Connect-ExchangeOnline

try {
    # Example using Microsoft Graph PowerShell SDK (pseudo-usage for demo):
    if (Get-Command Get-MgUser -ErrorAction SilentlyContinue) {
        $user = Get-MgUser -UserId $UserPrincipalName -ErrorAction Stop

        Write-Host "Display Name : $($user.DisplayName)"
        Write-Host "UPN          : $($user.UserPrincipalName)"
        Write-Host "Account      : $($user.AccountEnabled ? 'Enabled' : 'Disabled')"
        Write-Host "Job Title    : $($user.JobTitle)"
        Write-Host "Department   : $($user.Department)"
        Write-Host ""
    } else {
        Write-Warning "Get-MgUser not available. Install/Import Microsoft Graph modules to make this functional."
    }

    # Example mailbox stats (Exchange Online), if module is present
    if (Get-Command Get-ExoMailbox -ErrorAction SilentlyContinue) {
        $mbx = Get-ExoMailbox -Identity $UserPrincipalName -ErrorAction Stop
        $stats = Get-ExoMailboxStatistics -Identity $UserPrincipalName -ErrorAction Stop

        Write-Host "Mailbox Database : $($mbx.Database)"
        Write-Host "Total Item Size  : $($stats.TotalItemSize)"
        Write-Host "Item Count       : $($stats.ItemCount)"
        Write-Host ""
    } else {
        Write-Host "Exchange Online cmdlets not available; mailbox stats skipped." -ForegroundColor Yellow
    }
}
catch {
    Write-Error "Failed to audit user: $($_.Exception.Message)"
}

Write-Host "Audit complete (demo). In production, extend this with licence checks, group membership, etc."

