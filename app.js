// Minimal KB router: lists Markdown files and renders them
const SECTIONS = {
  "SOPs": [
    "sops/password-reset.md",
    "sops/outlook-profile-reset.md",
    "sops/printer-troubleshoot.md",
    "sops/ticket-triage.md",
    "sops/vpn-connection-issues.md",
  ],
  "Runbooks": [
    "runbooks/incident-email-outage.md",
    "runbooks/incident-network-degradation.md",
    "runbooks/sev-handoff-template.md",
  ],
  "Labs": [
    "labs/m365-user-lifecycle.md",
    "labs/azuread-basics.md",
    "labs/windows-troubleshooting-lab.md",
  ],
  "Scripts (PowerShell/Bash)": [
    "scripts/powershell/Check-Connectivity.ps1",
    "scripts/powershell/Reset-Network.ps1",
    "scripts/powershell/M365-User-Audit.ps1",
    "scripts/powershell/Disk-Cleanup-Report.ps1",
    "scripts/bash/check_dns.sh",
  ],
  "Tooling": [
    "tooling/README.md",
  ]
};

const navEl = document.getElementById("nav");
const mdEl  = document.getElementById("md");
const searchEl = document.getElementById("search");

// Build nav
function renderNav(filter = "") {
  navEl.innerHTML = "";
  const q = filter.trim().toLowerCase();

  Object.entries(SECTIONS).forEach(([section, files]) => {
    const group = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = section;
    group.appendChild(h);

    files
      .filter(p => !q || p.toLowerCase().includes(q))
      .forEach(path => {
        const a = document.createElement("a");
        a.textContent = path.split("/").at(-1);
        a.href = `#${encodeURIComponent(path)}`;
        group.appendChild(a);
      });

    navEl.appendChild(group);
  });
}

async function renderPath(path) {
  // Render Markdown or code (ps1/sh)
  const isMarkdown = path.endsWith(".md");
  const res = await fetch(path);
  if (!res.ok) {
    mdEl.innerHTML = `<p>Not found: <code>${path}</code></p>`;
    return;
  }
  const text = await res.text();

  if (isMarkdown) {
    mdEl.innerHTML = marked.parse(text, { mangle: false, headerIds: true });
    document.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
  } else {
    const lang = path.endsWith(".ps1") ? "powershell" : (path.endsWith(".sh") ? "bash" : "");
    mdEl.innerHTML = `
      <h2>${path.split("/").at(-1)}</h2>
      <pre><code class="${lang}">${escapeHtml(text)}</code></pre>
      <p><strong>How to run:</strong></p>
      ${lang === "powershell"
        ? `<pre><code class="powershell">Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
${path.includes("Reset-Network.ps1") ? ".\\" + path + " -Confirm" : ".\\" + path}</code></pre>`
        : `<pre><code class="bash">bash ${path} outlook.office365.com</code></pre>`}
    `;
    document.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function route() {
  const hash = decodeURIComponent(location.hash.replace(/^#/, ''));
  const path = hash || "README.md";
  renderPath(path);
}

window.addEventListener("hashchange", route);
searchEl.addEventListener("input", e => renderNav(e.target.value));

// initial
renderNav();
route();
