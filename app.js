document.querySelectorAll('.tabs button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
const state={tickets:[], filtered:[]};
async function loadTickets(){
  try{ const r = await fetch('data/tickets.json'); const j = await r.json(); state.tickets=j; state.filtered=j; render(); }
  catch(e){ console.error(e); }
}
function render(){
  const list=document.getElementById('list');
  list.innerHTML = state.filtered.map(t=>`<div class="item"><h4>${t.summary}</h4>
    <div><span class="badge">${t.severity}</span><span class="badge">${t.status}</span></div>
    <p>User: ${t.user}</p></div>`).join('');
}
function applyFilters(){
  const q=document.getElementById('q').value.toLowerCase();
  const sev=document.getElementById('sev').value;
  const st=document.getElementById('status').value;
  state.filtered = state.tickets.filter(t=>
    (!q || t.summary.toLowerCase().includes(q) || t.user.toLowerCase().includes(q)) &&
    (!sev || t.severity===sev) && (!st || t.status===st));
  render();
}
['q','sev','status'].forEach(id=>document.getElementById(id).addEventListener('input',applyFilters));
loadTickets();
const form=document.getElementById('resetForm'); const msg=document.getElementById('resetMsg'); const gen=document.getElementById('genTickets');
let store=JSON.parse(localStorage.getItem('genTickets')||'[]'); store.forEach(addLi);
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data={user:user.value.trim(), verify:verify.value.trim(), reason:reason.value.trim(), when:new Date().toISOString()};
  const id='RST-'+Math.random().toString(36).slice(2,8).toUpperCase();
  store.push({id,...data}); localStorage.setItem('genTickets', JSON.stringify(store));
  addLi({id,...data}); msg.textContent='Ticket '+id+' created'; form.reset(); setTimeout(()=>msg.textContent='',2000);
});
function addLi(t){ const li=document.createElement('li'); li.textContent=`${t.id} — ${t.user} — ${t.reason} — ${new Date(t.when).toLocaleString()}`; gen.prepend(li); }
document.getElementById('runCheck').addEventListener('click', async ()=>{
  const out=document.getElementById('netOut'); const url=document.getElementById('endpoint').value.trim(); out.textContent='Checking '+url+' ...';
  const t0=performance.now(); try{ const r=await fetch(url,{cache:'no-store'}); const t1=performance.now(); out.textContent=`HTTP ${r.status} in ${(t1-t0).toFixed(1)} ms`; }
  catch(e){ const t1=performance.now(); out.textContent=`ERROR after ${(t1-t0).toFixed(1)} ms — ${e.message}`; }
});
