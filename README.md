<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>منصة الوساطة DzBigBuy - ربط التجار بالمسوقين | دفع آمن عبر Baridimob</title>

  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />

  <style>
    :root {
      --primary: #facc15;
      --primary-dark: #eab308;
      --accent-dark: #020617;
      --card-dark: #0f172a;
      --soft: #f9fafb;
    }
    * { box-sizing: border-box; font-family: "Cairo", sans-serif; }
    body { background-color: var(--accent-dark); color: #fff; margin: 0; overflow-x: hidden; }
    .glass { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
    .btn-primary { background-color: var(--primary); color: #000; font-weight: 700; transition: all 0.3s ease; }
    .btn-primary:hover { background-color: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4); }
    .section-transition { display: none; }
    .section-active { display: block; animation: fadeIn 0.4s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  </style>
</head>
<body>

  <script type="module">
    // إعدادات Firebase (يجب أن تضع مفاتيحك هنا إذا لم تكن موجودة)
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
    import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy, serverTimestamp, where } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

    // ... هنا تضع الـ firebaseConfig الخاص بك ...
    const firebaseConfig = { /* ضع إعداداتك هنا */ };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // دالة التبديل السريع جداً للأقسام
    function fastSectionSwitch(sectionId) {
      document.querySelectorAll('section').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('section-active');
      });
      const target = document.getElementById(sectionId);
      if(target) {
        target.classList.remove('hidden');
        target.classList.add('section-active');
      }
      window.scrollTo(0, 0);
    }

    // دالة التسجيل المعدلة للسرعة القصوى
    async function handleRegister(e) {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      const role = document.getElementById("regRole").value;

      try {
        // 1. التنفيذ الفوري للتسجيل
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. التحويل الفوري لواجهة الحساب (قبل انتظار الداتابيز)
        fastSectionSwitch('accountSection');
        showNotification(lang === 'ar' ? "تم الدخول بنجاح!" : "Welcome!", "success");

        // 3. الحفظ في الداتابيز يتم في الخلفية (Background process)
        updateProfile(user, { displayName: name });
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name,
          email,
          role,
          balance: 0,
          createdAt: serverTimestamp(),
        }).then(() => {
            renderAccount(); // تحديث البيانات بمجرد اكتمال الحفظ
        });

      } catch (error) {
        console.error(error);
        showNotification(lang === 'ar' ? "خطأ في التسجيل" : "Error", "error");
      }
    }

    // ربط الدوال وتفعيل المستمعات (Listeners)
    document.addEventListener("DOMContentLoaded", () => {
      const regForm = document.getElementById("registerForm");
      if(regForm) regForm.addEventListener("submit", handleRegister);
    });

    // ... بقية دوال الموقع الأصلية ...
  </script>
</body>
</html>
