import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function load(id, file){
  document.getElementById(id).innerHTML =
    await fetch(file).then(r=>r.text());
}

await load("layout","layout.html");
await load("views","views.html");
await load("modals","modals.html");

window.register = async ()=>{
  await createUserWithEmailAndPassword(auth,email.value,password.value);
};

window.login = async ()=>{
  await signInWithEmailAndPassword(auth,email.value,password.value);
};

window.logout = async ()=>{
  await signOut(auth);
};

window.publishAd = async ()=>{
  await addDoc(collection(db,"ads"),{
    title:adTitle.value,
    desc:adDesc.value,
    uid:auth.currentUser.uid,
    created:Date.now()
  });
  loadAds();
};

async function loadAds(){
  adsContainer.innerHTML="";
  const snap = await getDocs(collection(db,"ads"));
  snap.forEach(d=>{
    const a=d.data();
    adsContainer.innerHTML+=`
      <div class="card">
        <strong>${a.title}</strong>
        <p>${a.desc}</p>
      </div>`;
  });
}

onAuthStateChanged(auth,user=>{
  ["homeView","authView","adsView"].forEach(v=>{
    document.getElementById(v).classList.add("hidden");
  });

  if(user){
    adsView.classList.remove("hidden");
    loadAds();
  }else{
    authView.classList.remove("hidden");
  }
});

document.addEventListener("click",e=>{
  if(e.target.dataset.view){
    document.querySelectorAll("main section").forEach(s=>s.classList.add("hidden"));
    document.getElementById(e.target.dataset.view).classList.remove("hidden");
  }
});