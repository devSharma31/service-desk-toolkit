const SECTIONS = {
  "SOPs": [
    "../sops/password-reset.md",
    "../sops/outlook-profile-reset.md",
    "../sops/printer-troubleshoot.md",
    "../sops/ticket-triage.md",
    "../sops/vpn-connection-issues.md",
  ],
  "Runbooks": [
    "../runbooks/incident-email-outage.md",
    "../runbooks/incident-network-degradation.md",
    "../runbooks/sev-handoff-template.md",
  ],
  "Labs": [
    "../labs/m365-user-lifecycle.md",
    "../labs/azuread-basics.md",
    "../labs/windows-troubleshooting-lab.md",
  ],
  "Scripts (PowerShell/Bash)": [
    "../scripts/powershell/Check-Connectivity.ps1",
    "../scripts/powershell/Reset-Network.ps1",
    "../scripts/powershell/M365-User-Audit.ps1",
    "../scripts/powershell/Disk-Cleanup-Report.ps1",
    "../scripts/bash/check_dns.sh",
  ],
  "Tooling": ["../tooling/README.md"]
};

const navEl = document.getElementById("nav");
const mdEl  = document.getElementById("md");
const searchEl = document.getElementById("search");

function renderNav(filter=""){
  navEl.innerHTML = "";
  const q = filter.trim().toLowerCase();
  Object.entries(SECTIONS).forEach(([section, files])=>{
    const block = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = section; block.appendChild(h);
    files.filter(p=>!q || p.toLowerCase().includes(q)).forEach(path=>{
      const a = document.createElement("a");
      a.textContent = path.split("/").at(-1);
      a.href = `#${encodeURIComponent(path)}`;
      block.appendChild(a);
    });
    navEl.appendChild(block);
  });
}

async function renderPath(path){
  const isMarkdown = path.endsWith(".md");
  const res = await fetch(path);
  if(!res.ok){ mdEl.innerHTML = `<p>Not found: <code>${path}</code></p>`; return; }
  const text = await res.text();

  if(isMarkdown){
    mdEl.innerHTML = marked.parse(text, { mangle:false, headerIds:true });
    document.querySelectorAll('pre code').forEach(hljs.highlightElement);
  }else{
    const lang = path.endsWith(".ps1") ? "powershell" : (path.endsWith(".sh") ? "bash" : "");
    mdEl.innerHTML = `
      <h2>${path.split("/").at(-1)}</h2>
      <pre><code class="${lang}">${escapeHtml(text)}</code></pre>
      <p><strong>How to run:</strong></p>
      ${lang==="powershell"
        ? `<pre><code class="powershell">Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
${path.includes("Reset-Network.ps1") ? path.replace("../","").replaceAll("/","\\") + " -Confirm" : path.replace("../","").replaceAll("/","\\")}</code></pre>`
        : `<pre><code class="bash">bash ${path.replace("../","") } outlook.office365.com</code></pre>`}
    `;
    document.querySelectorAll('pre code').forEach(hljs.highlightElement);
  }
  window.scrollTo({top:0,behavior:"smooth"});
}

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function route(){ const hash = decodeURIComponent(location.hash.replace(/^#/,'')); renderPath(hash || "../README.md"); }

window.addEventListener("hashchange", route);
document.getElementById("search").addEventListener("input", e=>renderNav(e.target.value));

renderNav(); route();
