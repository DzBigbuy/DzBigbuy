async function load(id, file){
  const el = document.getElementById(id);
  if(!el) return;
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

load("layout","layout.html");
load("views","views.html");
load("modals","modals.html");

document.addEventListener("click",e=>{
  if(e.target.dataset.view){
    document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
    document.getElementById(e.target.dataset.view).classList.remove("hidden");
  }
});