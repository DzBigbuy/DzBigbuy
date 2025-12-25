<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>منصة الوساطة DzBigBuy - ربط التجار بالمسوقين | دفع آمن عبر Baridimob</title>

  <!-- Tailwind CSS (Browser build) -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <!-- Cairo font -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />

  <style>
    :root {
      --primary: #facc15; /* أصفر أساسي */
      --primary-dark: #eab308; /* أصفر داكن */
      --accent-dark: #020617; /* خلفية داكنة عامة */
      --card-dark: #0f172a; /* خلفية كروت داكنة */
      --soft: #f9fafb; /* خلفية فاتحة للأقسام */
    }

    * {
      box-sizing: border-box;
      font-family: "Cairo", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      height: 100%;
      -webkit-font-smoothing: antialiased;
      -webkit-tap-highlight-color: transparent;
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      background: radial-gradient(circle at top, #111827 0%, #020617 55%, #000 100%);
      color: #e5e7eb;
      overflow-x: hidden;
      font-size: 16px;
    }

    .nav-gradient {
      background: linear-gradient(135deg, #000 0%, #020617 40%, var(--primary-dark) 100%);
    }

    .hero-overlay {
      background:
        linear-gradient(120deg, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.94) 45%, rgba(0, 0, 0, 0.96) 100%),
        url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80");
      background-size: cover;
      background-position: center;
    }

    .primary-btn {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: #000;
      border-radius: 999px;
      font-weight: 700;
      transition: all 0.2s ease;
    }

    .primary-btn:hover {
      background: linear-gradient(135deg, #fef08a 0%, var(--primary) 100%);
      transform: translateY(-1px);
      box-shadow: 0 15px 40px rgba(250, 204, 21, 0.4);
    }

    .secondary-btn {
      background: linear-gradient(135deg, #020617 0%, #111827 60%, #020617 100%);
      color: #f9fafb;
      border-radius: 999px;
      font-weight: 700;
      border: 1px solid rgba(148, 163, 184, 0.4);
      transition: all 0.2s ease;
    }

    .secondary-btn:hover {
      background: linear-gradient(135deg, #020617 0%, #111827 80%, var(--primary-dark) 100%);
      border-color: var(--primary);
      transform: translateY(-1px);
    }

    .card-glass {
      background: rgba(15, 23, 42, 0.96);
      border-radius: 1.25rem;
      border: 1px solid rgba(148, 163, 184, 0.35);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(18px);
      transition: all 0.25s ease;
    }

    .card-glass:hover {
      box-shadow: 0 30px 100px rgba(0, 0, 0, 0.9);
      border-color: rgba(250, 204, 21, 0.9);
      transform: translateY(-6px);
    }

    .stat-card {
      background: radial-gradient(circle at top left, rgba(250, 204, 21, 0.22) 0%, rgba(15, 23, 42, 0.98) 55%, #020617 100%);
      border-right: 4px solid var(--primary);
    }

    .feature-icon {
      background: radial-gradient(circle at top, #fef9c3 0%, #facc15 35%, #eab308 100%);
      color: #422006;
      width: 56px;
      height: 56px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(250, 204, 21, 0.5);
    }

    .tab-button.active {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: #000;
      box-shadow: 0 10px 30px rgba(250, 204, 21, 0.45);
    }

    .account-type-btn.active {
      border-color: var(--primary);
      box-shadow: 0 10px 30px rgba(250, 204, 21, 0.4);
      transform: scale(1.02);
    }

    .form-input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.35);
    }

    .notification {
      animation: slideIn 0.25s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(120%);
        opacity: 0;
      }

      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    @media (max-width: 640px) {
      .hero-title-main {
        font-size: 1.8rem;
        line-height: 1.7;
      }

      .hero-title-sub {
        font-size: 1.4rem;
      }

      nav .nav-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }
    }
  </style>
</head>

<body class="text-slate-100">
  <!-- شريط التنقل -->
  <nav class="nav-gradient sticky top-0 z-50 shadow-lg">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between nav-inner">
      <!-- مبدل اللغة (زر واحد يتنقل بين اللغات) -->
      <div class="flex items-center gap-1 text-[10px] sm:text-xs text-yellow-100 absolute left-4 top-3 sm:static sm:order-3">
        <button id="langToggle" class="px-3 py-1 rounded-full bg-yellow-400 text-black font-bold flex items-center gap-1">
          <i class="fas fa-globe"></i>
          <span id="langToggleLabel">AR</span>
        </button>
      </div>
      <div class="flex items-center gap-3">
        <button id="mobileMenuBtn" class="lg:hidden text-yellow-200 text-2xl">
          <i class="fas fa-bars"></i>
        </button>
        <div class="bg-yellow-400 text-black p-2 rounded-xl flex items-center justify-center">
          <i class="fas fa-sack-dollar fa-lg"></i>
        </div>
        <div class="flex flex-col leading-tight">
          <span id="navBrandTop" class="text-[10px] sm:text-xs text-yellow-200 font-semibold">منصة الوساطة</span>
          <span class="font-extrabold text-lg sm:text-2xl tracking-wide">
            <span class="text-white">Dz</span><span class="text-yellow-300">Big</span><span class="text-white">Buy</span>
          </span>
          <span id="navBrandSub" class="text-[10px] sm:text-xs text-yellow-100 hidden sm:block">ربط التجار بالمسوقين بدفع آمن عبر Baridimob</span>
        </div>
      </div>

      <!-- أزرار كبيرة - سطح المكتب -->
      <div class="hidden lg:flex items-center gap-2">
        <button id="showHome" class="tab-button px-3 py-2 rounded-full text-sm font-semibold bg-yellow-400 text-black flex items-center gap-1">
          <i class="fas fa-home"></i>
          <span id="navHomeText">الرئيسية</span>
        </button>
        <button id="showUserView" class="tab-button px-3 py-2 rounded-full text-sm font-semibold text-yellow-200 hover:bg-slate-900 flex items-center gap-1">
          <i class="fas fa-ad"></i>
          <span id="navAdsText">الإعلانات</span>
        </button>
        <button id="showTraderAds" class="tab-button px-3 py-2 rounded-full text-sm font-semibold text-yellow-200 hover:bg-slate-900 flex items-center gap-1">
          <i class="fas fa-store"></i>
          <span id="navTraderAdsText">إعلانات التجار</span>
        </button>
        <button id="showMarketerAds" class="tab-button px-3 py-2 rounded-full text-sm font-semibold text-yellow-200 hover:bg-slate-900 flex items-center gap-1">
          <i class="fas fa-bullhorn"></i>
          <span id="navMarketerAdsText">إعلانات المسوقين</span>
        </button>
        <button id="showAccount" class="tab-button px-3 py-2 rounded-full text-sm font-semibold text-yellow-200 hover:bg-slate-900 hidden flex items-center gap-1">
          <i class="fas fa-user"></i>
          <span id="navAccountText">حسابي</span>
        </button>
        <button id="showAdminView" class="tab-button px-3 py-2 rounded-full text-sm font-semibold text-yellow-200 hover:bg-slate-900 hidden flex items-center gap-1">
          <i class="fas fa-cogs"></i>
          <span id="navAdminText">لوحة المدير</span>
        </button>
        <button id="showRegister" class="tab-button px-3 py-2 rounded-full text-sm font-semibold bg-white text-amber-700 flex items-center gap-1">
          <i class="fas fa-user-plus"></i>
          <span id="navRegisterText">التسجيل</span>
        </button>
      </div>

      <!-- يمين: ترحيب / أزرار موبايل -->
      <div class="flex items-center gap-1.5">
        <span id="userWelcome" class="hidden text-[10px] sm:text-xs font-semibold text-yellow-100"></span>
        <button id="showAccountMobile" class="lg:hidden secondary-btn px-2.5 py-1.5 text-[10px] font-semibold hidden flex items-center gap-1">
          <i class="fas fa-user text-[11px]"></i>
          <span>حسابي</span>
        </button>
        <button id="showRegisterMobile" class="lg:hidden primary-btn px-2.5 py-1.5 text-[10px] font-semibold flex items-center gap-1">
          <i class="fas fa-user-plus text-[11px]"></i>
          <span>التسجيل</span>
        </button>
        <button id="showTraderAdsMobileInline" class="lg:hidden secondary-btn px-2.5 py-1.5 text-[10px] font-semibold flex items-center gap-1">
          <i class="fas fa-store text-[11px]"></i>
          <span>إعلانات التجار</span>
        </button>
        <button id="showMarketerAdsMobileInline" class="lg:hidden secondary-btn px-2.5 py-1.5 text-[10px] font-semibold flex items-center gap-1">
          <i class="fas fa-bullhorn text-[11px]"></i>
          <span>إعلانات المسوقين</span>
        </button>
      </div>
    </div>

    <!-- قائمة الجوال المنسدلة -->
    <div id="mobileMenu" class="lg:hidden hidden border-t border-yellow-700 bg-black/90">
      <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
        <button id="showHomeMobile" class="tab-button w-full text-right px-3 py-2 rounded-xl bg-yellow-400 text-black flex items-center justify-between">
          <span><i class="fas fa-home ml-2"></i>الرئيسية</span>
        </button>
        <button id="showUserViewMobile" class="tab-button w-full text-right px-3 py-2 rounded-xl text-yellow-200 border border-yellow-700 flex items-center justify-between">
          <span><i class="fas fa-ad ml-2"></i>الإعلانات</span>
        </button>
        <button id="showTraderAdsMobile" class="tab-button w-full text-right px-3 py-2 rounded-xl text-yellow-200 border border-yellow-700 flex items-center justify-between">
          <span><i class="fas fa-store ml-2"></i>إعلانات التجار</span>
        </button>
        <button id="showMarketerAdsMobile" class="tab-button w-full text-right px-3 py-2 rounded-xl text-yellow-200 border border-yellow-700 flex items-center justify-between">
          <span><i class="fas fa-bullhorn ml-2"></i>إعلانات المسوقين</span>
        </button>
        <button id="showAccountMobileMenu" class="tab-button w-full text-right px-3 py-2 rounded-xl text-yellow-200 border border-yellow-700 hidden flex items-center justify-between">
          <span><i class="fas fa-user ml-2"></i>حسابي</span>
        </button>
        <button id="showAdminViewMobile" class="tab-button w-full text-right px-3 py-2 rounded-xl text-yellow-200 border border-yellow-700 hidden flex items-center justify-between">
          <span><i class="fas fa-cogs ml-2"></i>لوحة المدير</span>
        </button>
        <button id="showRegisterMobileMenu" class="tab-button w-full text-right px-3 py-2 rounded-xl bg-white text-amber-700 flex items-center justify-between">
          <span><i class="fas fa-user-plus ml-2"></i>التسجيل</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- الرئيسية -->
  <main id="homeView" class="min-h-screen">
    <!-- هيرو -->
    <section class="hero-overlay text-white px-4 py-12 sm:py-16 md:py-20">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="hero-title-main font-extrabold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
          <span id="heroTitleMain">منصة الوساطة <span class="text-yellow-300">dzbuy</span> تربط التجار بالمسوقين</span>
          <span id="heroTitleSub" class="hero-title-sub block mt-2 text-yellow-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl">سجّل، انشر إعلانك، ودع المسوقين يجلبون لك العملاء</span>
        </h1>
        <p id="heroP1" class="text-sm sm:text-base md:text-lg text-gray-100 max-w-3xl mx-auto mb-4">
          لا تحتاج للبحث عن مسوقين أو التفاوض معهم يدويًا. في منصة الوساطة dzbuy يعرض التاجر منتجه بشروط واضحة،
          ويتقدّم المسوقون بطلب التعامل، مع حماية كاملة لحقوق الطرفين داخل المنصة.
        </p>
        <p id="heroP2" class="text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl mx-auto mb-8">
          لا مكالمات عشوائية، لا أرقام هاتف، ولا تحويلات خارجية. كل التعاملات، من الاتفاق حتى الدفع عبر Baridimob،
          تتم داخل بيئة واحدة واضحة وآمنة.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button id="heroRegisterTrader" class="primary-btn px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center gap-2">
            <i class="fas fa-play-circle text-lg"></i>
            <span>ابدأ الآن كتاجر — اعرض منتجك بثقة</span>
          </button>
          <button id="heroLearnMore" class="secondary-btn px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border border-yellow-400 flex items-center justify-center gap-2">
            <i class="fas fa-info-circle"></i>
            <span>كيف تعمل المنصة؟</span>
          </button>
        </div>
      </div>
    </section>

    <!-- قسم تعريفي -->
    <section class="px-4 py-10 sm:py-14">
      <div class="max-w-5xl mx-auto card-glass p-6 sm:p-8 md:p-10">
        <div class="text-center mb-8">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-3">منصة وسيطة احترافية تجمع بين التجار والمسوقين في مكان واحد</h2>
          <p class="text-sm sm:text-base text-gray-300">اتفاق واضح، لوحة تحكم لكل طرف، ودفع آمن عبر Baridimob، مع متابعة كل تفاصيل التعامل من صفحة حسابك.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- للتاجر -->
          <div class="bg-slate-900/80 rounded-2xl border border-yellow-500/40 p-5 sm:p-6">
            <div class="flex items-start gap-3 mb-4">
              <div class="bg-yellow-400 text-black p-3 rounded-xl">
                <i class="fas fa-store-alt text-xl"></i>
              </div>
              <h3 id="whyTraderTitle" class="text-lg sm:text-xl font-bold text-yellow-100">لماذا ينضم التاجر إلى dzbuy؟</h3>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm md:text-base text-gray-200 pr-1">
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-yellow-400 mt-0.5"></i>
                <span id="whyTraderItem1">تنشر منتجك وتحدد ميزانيتك ونتائجك المطلوبة بوضوح.</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-yellow-400 mt-0.5"></i>
                <span id="whyTraderItem2">المبلغ يبقى محفوظًا داخل المنصة حتى إنجاز العمل المتفق عليه.</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-yellow-400 mt-0.5"></i>
                <span id="whyTraderItem3">يمكنك رفض أو قبول طلبات المسوقين بناءً على خبرتهم وتقييمهم.</span>
              </li>
              <li class="flex items-start gap-2">
                <i class="fas fa-check text-yellow-400 mt-0.5"></i>
                <span id="whyTraderItem4">كل تعامل موثّق في حسابك ويمكن الرجوع إليه في أي وقت.</span>
              </li>
            </ul>
          </div>

          <!-- الأمان -->
          <div class="bg-slate-950/80 rounded-2xl border border-slate-700 p-5 sm:p-6">
            <div class="flex items-start gap-3 mb-4">
              <div class="bg-yellow-400 text-black p-3 rounded-xl">
                <i class="fas fa-shield-alt text-xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white">الأمان أولًا للجانبين</h3>
            </div>
            <div class="space-y-3 text-xs sm:text-sm md:text-base text-gray-200">
              <p class="flex items-start gap-2">
                <i class="fas fa-lock text-yellow-400 mt-0.5"></i>
                <span>لسنا طرفًا في البيع نفسه؛ نحن طرف وسيط لضمان وصول الأجر عند الإنجاز الكامل، أو استرجاع المبلغ إن لم تتحقق النتائج.</span>
              </p>
              <p class="flex items-start gap-2">
                <i class="fas fa-ban text-yellow-400 mt-0.5"></i>
                <span>لا أرقام هاتف، لا حسابات اجتماعية، ولا تواصل خارج المنصة حفاظًا على الشفافية.</span>
              </p>
              <p class="flex items-start gap-2">
                <i class="fas fa-check-circle text-yellow-400 mt-0.5"></i>
                <span>كل شيء يتم داخل لوحة المنصة: الطلبات، التحديثات، وإثباتات الدفع عبر Baridimob.</span>
              </p>
            </div>
          </div>
        </div>

        <!-- لمن المنصة -->
        <div class="mt-8 bg-slate-900/80 border border-yellow-500/40 rounded-2xl p-6 sm:p-7">
          <h3 class="text-center text-lg sm:text-xl md:text-2xl font-bold text-yellow-100 mb-6">لمن هذه المنصة؟</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-slate-950/80 rounded-2xl border border-slate-700 p-5 text-center flex flex-col items-center gap-3">
              <div class="feature-icon mb-1">
                <i class="fas fa-user-tie text-xl"></i>
              </div>
              <h4 class="font-semibold text-base sm:text-lg text-white">للتجار وأصحاب المشاريع</h4>
              <p class="text-xs sm:text-sm text-gray-300">الذين يريدون زيادة المبيعات دون إضاعة الوقت في التجارب العشوائية، وبأعلى مستوى من الأمان.</p>
            </div>
            <div class="bg-slate-950/80 rounded-2xl border border-slate-700 p-5 text-center flex flex-col items-center gap-3">
              <div class="feature-icon mb-1">
                <i class="fas fa-bullhorn text-xl"></i>
              </div>
              <h4 class="font-semibold text-base sm:text-lg text-white">للمسوقين المحترفين</h4>
              <p class="text-xs sm:text-sm text-gray-300">الذين يبحثون عن فرص واضحة بأجر مضمون مقابل نتائج قابلة للقياس.</p>
            </div>
          </div>

          <div id="startSection" class="mt-7 text-center">
            <h4 class="text-base sm:text-lg font-bold text-yellow-100 mb-3">جاهز لبدء رحلتك؟</h4>
            <p class="text-xs sm:text-sm text-gray-300 mb-5">سجّل كتاجر واعرض منتجاتك، أو كمسوق وابحث عن فرص مميزة للعمل مع تجار موثوقين.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3">
              <button id="startAsTrader" class="primary-btn px-7 py-2.5 text-sm flex items-center justify-center gap-2">
                <i class="fas fa-store"></i>
                <span>سجّل كتاجر</span>
              </button>
              <button id="startAsMarketer" class="secondary-btn px-7 py-2.5 text-sm border border-yellow-400 flex items-center justify-center gap-2">
                <i class="fas fa-bullhorn"></i>
                <span>سجّل كمسوق</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- كيف تعمل المنصة -->
    <section id="howItWorks" class="px-4 pb-10 sm:pb-14">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-8">
          <h2 id="howTitle" class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-2">كيف تعمل المنصة؟</h2>
          <p id="howSubtitle" class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">ثلاث خطوات واضحة من التسجيل إلى استلام الأجر أو إطلاق حملتك التسويقية.</p>
        </div>
        <div class="grid gap-4 md:gap-6 md:grid-cols-3">
          <div class="bg-slate-900/90 rounded-2xl border border-slate-700 p-5 flex flex-col items-center text-center gap-3">
            <div class="text-3xl font-extrabold text-yellow-400">1</div>
            <div class="feature-icon">
              <i class="fas fa-upload text-xl"></i>
            </div>
            <h3 class="text-sm sm:text-base font-bold text-white">انشئ حسابك و انشر إعلانك</h3>
            <p class="text-xs sm:text-sm text-gray-300">سجّل كتاجر أو مسوق، ثم أضف إعلانك مع تفاصيل واضحة عن المنتج أو الخدمة والميزانية.</p>
          </div>
          <div class="bg-slate-900/90 rounded-2xl border border-slate-700 p-5 flex flex-col items-center text-center gap-3">
            <div class="text-3xl font-extrabold text-yellow-400">2</div>
            <div class="feature-icon">
              <i class="fas fa-handshake text-xl"></i>
            </div>
            <h3 class="text-sm sm:text-base font-bold text-white">طلبات التعامل والموافقة</h3>
            <p class="text-xs sm:text-sm text-gray-300">يتقدم المسوقون بطلب التعامل مع إعلانك، ويمكنك اختيار الأنسب من داخل حسابك.</p>
          </div>
          <div class="bg-slate-900/90 rounded-2xl border border-slate-700 p-5 flex flex-col items-center text-center gap-3">
            <div class="text-3xl font-extrabold text-yellow-400">3</div>
            <div class="feature-icon">
              <i class="fas fa-chart-line text-xl"></i>
            </div>
            <h3 class="text-sm sm:text-base font-bold text-white">متابعة النتائج والدفع الآمن</h3>
            <p class="text-xs sm:text-sm text-gray-300">تتابع تقدم العمل وتدفع عبر Baridimob مع إثبات دفع يراجعه المدير قبل تحويل المبلغ للطرف الآخر.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- صور تعبيرية -->
    <section class="px-4 pb-12">
      <div class="max-w-5xl mx-auto grid gap-4 md:grid-cols-3">
        <div class="overflow-hidden rounded-2xl border border-slate-700">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80" alt="اجتماع عمل بين تاجر ومسوق" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden rounded-2xl border border-slate-700">
          <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80" alt="تحليل أداء الحملات التسويقية" class="w-full h-52 object-cover" />
        </div>
        <div class="overflow-hidden rounded-2xl border border-slate-700">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=900&q=80" alt="دفع إلكتروني آمن" class="w-full h-52 object-cover" />
        </div>
      </div>
    </section>
  </main>

  <!-- واجهة الإعلانات -->
  <section id="userView" class="hidden min-h-screen px-4 py-10">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 id="adsPageTitle" class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-2">الإعلانات المتاحة</h1>
        <p id="adsPageSubtitle" class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">تصفّح العروض، واطلب التعامل أو ادفع بأمان عبر Baridimob. جميع العمليات موثقة في حسابك.</p>
      </div>

      <!-- قسم إعلانات التجار -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm sm:text-base font-bold text-yellow-100 flex items-center gap-2">
            <i class="fas fa-store text-yellow-400"></i>
            <span>إعلانات التجار</span>
          </h2>
          <span class="text-[11px] sm:text-xs text-gray-400">عروض يطرحها التجار ويبحثون فيها عن مسوقين</span>
        </div>
        <div id="adsTradersContainer" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4"></div>
      </div>

      <!-- قسم إعلانات المسوقين -->
      <div class="mb-10">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-sm sm:text-base font-bold text-yellow-100 flex items-center gap-2">
            <i class="fas fa-bullhorn text-yellow-400"></i>
            <span>إعلانات المسوقين</span>
          </h2>
          <span class="text-[11px] sm:text-xs text-gray-400">عروض يطرحها المسوقون للتعاون مع التجار</span>
        </div>
        <div id="adsMarketersContainer" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4"></div>
      </div>

      <!-- إضافة إعلان -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto">
        <h3 class="text-lg sm:text-xl font-bold text-yellow-100 mb-1 flex items-center gap-2">
          <i class="fas fa-plus-circle text-yellow-400"></i>
          <span>أضف إعلانك الجديد</span>
        </h3>
        <p class="text-[11px] sm:text-xs text-gray-400 mb-4">* إضافة الإعلانات متاحة للحسابات المسجلة كتاجر أو مسوق.</p>
        <div class="space-y-4 text-xs sm:text-sm">
          <div>
            <label class="block mb-1 text-gray-200 font-semibold">عنوان الإعلان</label>
            <input id="adTitle" type="text" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="مثال: مطلوب شريك تسويقي لمنتج جديد" />
          </div>
          <div>
            <label class="block mb-1 text-gray-200 font-semibold">وصف الإعلان</label>
            <textarea id="adDescription" rows="3" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="اكتب تفاصيل العرض والأهداف المطلوبة..."></textarea>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">المبلغ (دينار)</label>
              <input id="adPrice" type="number" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="1000" />
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">اسم المعلن</label>
              <input id="advertiserName" type="text" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="يُفضّل تركه فارغًا ليظهر اسم حسابك" />
            </div>
          </div>
          <div>
            <label class="block mb-1 text-gray-200 font-semibold">نوع الإعلان</label>
            <select id="adType" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100">
              <option value="تسويق">تسويق منتج</option>
              <option value="بيع">بيع مباشر</option>
              <option value="شراكة">شراكة تسويقية</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>
          <button id="addAdBtn" class="primary-btn w-full py-2.5 text-sm mt-2 flex items-center justify-center gap-2">
            <i class="fas fa-paper-plane"></i>
            <span>نشر الإعلان الآن</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- واجهة التسجيل -->
  <section id="registerView" class="hidden min-h-screen px-4 py-10">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-6 sm:mb-8">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-2 flex items-center justify-center gap-2">
          <i class="fas fa-user-plus text-yellow-400"></i>
          <span id="registerTitle">التسجيل في المنصة</span>
        </h1>
        <p id="registerSubtitle" class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">سجّل الآن كتاجر أو مسوق. التسجيل هو المفتاح لاستخدام جميع مميزات المنصة: إضافة الإعلانات، طلب التعامل، والدفع.</p>
      </div>

      <!-- تسجيل الدخول -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 mb-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h2 class="text-sm sm:text-base md:text-lg font-bold text-yellow-100 mb-1">تسجيل الدخول</h2>
            <p class="text-[11px] sm:text-xs text-gray-300">إذا كان لديك حساب سابقًا، يمكنك تسجيل الدخول باستخدام بريدك الإلكتروني وكلمة المرور.</p>
          </div>
        </div>
        <form id="loginForm" class="space-y-3 text-xs sm:text-sm">
          <div class="grid gap-3 sm:grid-cols-2">
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">البريد الإلكتروني</label>
              <input id="loginEmail" type="email" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">كلمة المرور</label>
              <input id="loginPassword" type="password" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
            </div>
          </div>
          <p id="loginError" class="hidden text-[11px] sm:text-xs text-red-400"></p>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-1">
            <button type="submit" class="primary-btn px-5 py-2 text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
              <i class="fas fa-sign-in-alt"></i>
              <span>دخول إلى حسابي</span>
            </button>
            <p class="text-[11px] sm:text-xs text-gray-400">لا تملك حسابًا بعد؟ <span class="text-yellow-400 font-semibold">سجّل من النموذج بالأسفل.</span></p>
          </div>
        </form>
      </div>

      <!-- اختيار نوع الحساب -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 mb-8">
        <h2 class="text-sm sm:text-base md:text-lg font-bold text-yellow-100 mb-4">اختر نوع الحساب</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <button id="selectTrader" type="button" class="account-type-btn bg-slate-950/80 border border-slate-700 rounded-2xl p-4 flex flex-col items-center text-center gap-3 transition-transform">
            <div class="feature-icon">
              <i class="fas fa-store text-xl"></i>
            </div>
            <h3 class="font-bold text-sm sm:text-base text-white">تاجر</h3>
            <p class="text-[11px] sm:text-sm text-gray-300">أريد تسويق منتجاتي وأبحث عن مسوقين محترفين.</p>
            <span class="mt-2 inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">سجّل كتاجر</span>
          </button>
          <button id="selectMarketer" type="button" class="account-type-btn bg-slate-950/80 border border-slate-700 rounded-2xl p-4 flex flex-col items-center text-center gap-3 transition-transform">
            <div class="feature-icon">
              <i class="fas fa-bullhorn text-xl"></i>
            </div>
            <h3 class="font-bold text-sm sm:text-base text-white">مسوق</h3>
            <p class="text-[11px] sm:text-sm text-gray-300">أريد العثور على فرص تسويقية وأعمل مع تجار موثوقين.</p>
            <span class="mt-2 inline-block bg-slate-900 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">سجّل كمسوق</span>
          </button>
        </div>
      </div>

      <!-- نموذج التسجيل -->
      <div id="registrationForm" class="hidden bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h2 id="formTitle" class="text-sm sm:text-base md:text-lg font-bold text-yellow-100">تسجيل تاجر جديد</h2>
            <p id="formSubtitle" class="text-[11px] sm:text-xs text-gray-300">املأ البيانات التالية لإتمام التسجيل.</p>
          </div>
          <div id="accountTypeBadge" class="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">تاجر</div>
        </div>

        <form id="registerForm" class="space-y-4 text-xs sm:text-sm">
          <input id="userType" type="hidden" value="trader" />
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">الاسم الكامل <span class="text-yellow-400">*</span></label>
              <input id="fullName" type="text" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">البريد الإلكتروني <span class="text-yellow-400">*</span></label>
              <input id="email" type="email" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">كلمة المرور <span class="text-yellow-400">*</span></label>
              <input id="password" type="password" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
              <p class="text-[10px] text-gray-400 mt-1">يجب أن تحتوي على 8 أحرف على الأقل.</p>
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">تأكيد كلمة المرور <span class="text-yellow-400">*</span></label>
              <input id="confirmPassword" type="password" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" required />
            </div>
          </div>

          <!-- حقول التاجر -->
          <div id="traderFields" class="space-y-3">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block mb-1 text-gray-200 font-semibold">اسم المتجر أو الشركة</label>
                <input id="storeName" type="text" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" />
              </div>
              <div>
                <label class="block mb-1 text-gray-200 font-semibold">رقم الهاتف</label>
                <input id="phone" type="tel" placeholder="+213" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" />
              </div>
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">نوع المنتجات أو الخدمات</label>
              <textarea id="products" rows="2" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="صف نوع منتجاتك أو خدماتك..."></textarea>
            </div>
          </div>

          <!-- حقول المسوق -->
          <div id="marketerFields" class="space-y-3 hidden">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block mb-1 text-gray-200 font-semibold">مجال التخصص</label>
                <select id="specialization" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100">
                  <option value="التسويق الإلكتروني">التسويق الإلكتروني</option>
                  <option value="وسائل التواصل الاجتماعي">وسائل التواصل الاجتماعي</option>
                  <option value="التسويق بالمحتوى">التسويق بالمحتوى</option>
                  <option value="التسويق بالعمولة">التسويق بالعمولة</option>
                  <option value="تسويق المنتجات">تسويق المنتجات</option>
                </select>
              </div>
              <div>
                <label class="block mb-1 text-gray-200 font-semibold">سنوات الخبرة</label>
                <select id="experience" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100">
                  <option value="أقل من سنة">أقل من سنة</option>
                  <option value="1-3 سنوات">1-3 سنوات</option>
                  <option value="3-5 سنوات">3-5 سنوات</option>
                  <option value="أكثر من 5 سنوات">أكثر من 5 سنوات</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block mb-1 text-gray-200 font-semibold">ملف التعريف المهني</label>
              <textarea id="bio" rows="2" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="اكتب نبذة عن مهاراتك وخبراتك..."></textarea>
            </div>
          </div>

          <div class="bg-slate-950/80 border border-yellow-500/30 rounded-2xl p-3 sm:p-4 flex items-start gap-3 mt-2">
            <i class="fas fa-shield-alt text-yellow-400 mt-0.5"></i>
            <div>
              <p class="text-xs font-bold text-yellow-100 mb-1">أمان الحساب وتخزين البيانات</p>
              <p class="text-[11px] text-gray-300">يتم تخزين الحسابات والإعلانات والتعاملات في Firebase (سحابيًا). احرص على استخدام بريد حقيقي وكلمة مرور قوية.</p>
            </div>
          </div>

          <div class="flex items-start gap-2 mt-2">
            <input id="terms" type="checkbox" class="mt-0.5 w-4 h-4" required />
            <label for="terms" class="text-[11px] sm:text-xs text-gray-200">أوافق على <span class="text-yellow-400 font-bold cursor-pointer">شروط الاستخدام</span> و<span class="text-yellow-400 font-bold cursor-pointer">سياسة الخصوصية</span> للمنصة.</label>
          </div>

          <div class="grid gap-3 sm:grid-cols-2 mt-2">
            <button id="submitRegistration" type="submit" class="primary-btn w-full py-2.5 text-sm flex items-center justify-center gap-2">
              <i class="fas fa-user-plus"></i>
              <span>إتمام التسجيل</span>
            </button>
            <button id="cancelRegistration" type="button" class="secondary-btn w-full py-2.5 text-sm flex items-center justify-center gap-2">
              <i class="fas fa-times"></i>
              <span>إلغاء</span>
            </button>
          </div>
        </form>
      </div>

      <!-- تأكيد التسجيل -->
      <div id="registrationConfirmation" class="hidden bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 text-center">
        <div class="flex flex-col items-center gap-3 mb-3">
          <div class="feature-icon">
            <i class="fas fa-envelope-open-text text-xl"></i>
          </div>
          <h2 class="text-sm sm:text-base md:text-lg font-bold text-yellow-100">تم إنشاء حسابك وتفعيله</h2>
          <p class="text-[11px] sm:text-xs text-gray-300 max-w-md">تم ربط حسابك بالبريد: <span id="confirmationEmail" class="font-bold text-yellow-300"></span>. يمكنك الآن استخدام المنصة: نشر الإعلانات، طلب التعامل، والدفع.</p>
        </div>
        <div class="bg-slate-950/80 border border-yellow-500/30 rounded-2xl p-3 text-right text-[11px] sm:text-xs text-gray-200 mb-4">
          <p class="font-bold text-yellow-100 mb-1">ماذا بعد التسجيل؟</p>
          <ul class="list-disc pr-4 space-y-1">
            <li>إنشاء إعلانات جديدة إذا كنت تاجرًا أو مسوقًا.</li>
            <li>طلب التعامل مع الإعلانات بحسب نوع حسابك (تاجر مع مسوق، أو مسوق مع تاجر).</li>
            <li>متابعة كل تعاملاتك من صفحة "حسابي".</li>
          </ul>
        </div>
        <div class="space-y-2">
          <button id="goToLogin" class="primary-btn w-full py-2.5 text-sm flex items-center justify-center gap-2">
            <i class="fas fa-user-circle"></i>
            <span>الانتقال إلى حسابي</span>
          </button>
          <button id="resendActivation" class="secondary-btn w-full py-2.5 text-sm flex items-center justify-center gap-2">
            <i class="fas fa-edit"></i>
            <span>سأعدل بياناتي لاحقًا من حسابي</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- حسابي -->
  <section id="accountView" class="hidden min-h-screen px-4 py-10">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-2 flex items-center justify-center gap-2">
          <i class="fas fa-user text-yellow-400"></i>
          <span id="accountTitle">حسابي</span>
        </h1>
        <p id="accountSubtitle" class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">من هنا يمكنك متابعة بيانات حسابك، إعلاناتك، وتعاملاتك داخل المنصة.</p>
      </div>

      <div id="accountGuestMessage" class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 sm:p-6 max-w-2xl mx-auto hidden text-center">
        <p class="text-xs sm:text-sm text-gray-200 mb-3">يجب تسجيل الدخول أو إنشاء حساب للوصول إلى صفحة حسابي.</p>
        <button id="goToRegisterFromAccount" class="primary-btn px-6 py-2 text-sm">التسجيل الآن</button>
      </div>

      <div id="accountContent" class="hidden space-y-6">
        <!-- معلومات الحساب والإحصائيات -->
        <div class="grid gap-4 lg:grid-cols-3">
          <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
            <div class="space-y-2 text-xs sm:text-sm">
              <h2 class="text-sm sm:text-base font-bold text-yellow-100 mb-1">معلومات الحساب</h2>
              <p class="text-gray-200"><span class="font-semibold">الاسم:</span> <span id="accountName"></span></p>
              <p class="text-gray-200"><span class="font-semibold">البريد:</span> <span id="accountEmail"></span></p>
              <p class="text-gray-200"><span class="font-semibold">الدور:</span> <span id="accountRole"></span></p>
            </div>
            <div class="mt-3 flex flex-col gap-2">
              <p class="text-[11px] text-gray-400 flex items-start gap-1">
                <i class="fas fa-info-circle text-yellow-400 mt-0.5"></i>
                <span>يتم إدارة هذا الحساب عبر Firebase. احرص على تسجيل الخروج إذا كنت تستخدم جهازًا مشتركًا.</span>
              </p>
              <button id="logoutBtn" class="secondary-btn px-4 py-1.5 text-xs sm:text-sm flex items-center gap-2 self-start">
                <i class="fas fa-sign-out-alt"></i>
                <span>تسجيل الخروج</span>
              </button>
            </div>
          </div>
          <div class="lg:col-span-2 grid gap-4 sm:grid-cols-3">
            <div class="stat-card rounded-2xl p-4 text-center text-xs sm:text-sm">
              <div class="text-xl sm:text-2xl font-extrabold text-yellow-300" id="myAdsCount">0</div>
              <div class="mt-1 text-gray-200 font-semibold">إعلاناتي</div>
            </div>
            <div class="stat-card rounded-2xl p-4 text-center text-xs sm:text-sm">
              <div class="text-xl sm:text-2xl font-extrabold text-white" id="myInteractionsCount">0</div>
              <div class="mt-1 text-gray-200 font-semibold">تعاملاتي</div>
            </div>
            <div class="stat-card rounded-2xl p-4 text-center text-xs sm:text-sm">
              <div class="text-xl sm:text-2xl font-extrabold text-yellow-300" id="myRoleBadge">تاجر</div>
              <div class="mt-1 text-gray-200 font-semibold">نوع الحساب</div>
            </div>
          </div>
        </div>

        <!-- إعلاناتي -->
        <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <h2 class="text-sm sm:text-base font-bold text-yellow-100 flex items-center gap-2">
              <i class="fas fa-bullhorn text-yellow-400"></i>
              <span>إعلاناتي</span>
            </h2>
            <button id="createAdFromAccount" class="primary-btn px-4 py-1.5 text-xs sm:text-sm flex items-center gap-2">
              <i class="fas fa-plus"></i>
              <span>إعلان جديد</span>
            </button>
          </div>
          <p id="noMyAds" class="hidden text-[11px] sm:text-xs text-gray-400 mb-2">لم تقم بإنشاء أي إعلان بعد.</p>
          <div id="myAdsContainer" class="grid gap-3 sm:grid-cols-2"></div>
        </div>

        <!-- تعاملاتي -->
        <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5">
          <h2 class="text-sm sm:text-base font-bold text-yellow-100 mb-3 flex items-center gap-2">
            <i class="fas fa-handshake text-yellow-400"></i>
            <span>تعاملاتي داخل المنصة</span>
          </h2>
          <p id="noMyInteractions" class="hidden text-[11px] sm:text-xs text-gray-400 mb-2">لم تقم بأي تعامل بعد.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-right border-collapse text-[11px] sm:text-xs">
              <thead class="bg-slate-800">
                <tr>
                  <th class="p-2 border border-slate-700">الإعلان</th>
                  <th class="p-2 border border-slate-700">النوع</th>
                  <th class="p-2 border border-slate-700">التاريخ</th>
                  <th class="p-2 border border-slate-700">الحالة</th>
                </tr>
              </thead>
              <tbody id="myInteractionsTable"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- لوحة المدير -->
  <section id="adminView" class="hidden min-h-screen px-4 py-10">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-100 mb-2 flex items-center justify-center gap-2">
          <i class="fas fa-cogs text-yellow-400"></i>
          <span id="adminTitle">لوحة تحكم المدير</span>
        </h1>
        <p id="adminSubtitle" class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">مراقبة التفاعلات، مراجعة إثباتات الدفع، وإدارة حسابات المستخدمين (متاحة فقط لحساب المدير).</p>
      </div>

      <!-- إحصائيات سريعة -->
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8 text-xs sm:text-sm">
        <div class="stat-card rounded-2xl p-4 text-center">
          <div id="statsAds" class="text-xl sm:text-2xl font-extrabold text-yellow-300">0</div>
          <div class="mt-1 text-gray-200 font-semibold">إعلان نشط</div>
        </div>
        <div class="stat-card rounded-2xl p-4 text-center">
          <div id="statsInteractions" class="text-xl sm:text-2xl font-extrabold text-white">0</div>
          <div class="mt-1 text-gray-200 font-semibold">تفاعل إجمالي</div>
        </div>
        <div class="stat-card rounded-2xl p-4 text-center">
          <div id="statsPayments" class="text-xl sm:text-2xl font-extrabold text-yellow-300">0</div>
          <div class="mt-1 text-gray-200 font-semibold">عمليات دفع</div>
        </div>
        <div class="stat-card rounded-2xl p-4 text-center">
          <div id="statsUsers" class="text-xl sm:text-2xl font-extrabold text-white">0</div>
          <div class="mt-1 text-gray-200 font-semibold">مستخدم مسجل</div>
        </div>
      </div>

      <!-- التفاعلات -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 mb-8 text-[11px] sm:text-xs">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <h3 class="font-bold text-yellow-100 flex items-center gap-2">
            <i class="fas fa-exchange-alt text-yellow-400"></i>
            <span>التفاعلات بين الأطراف</span>
          </h3>
          <button id="refreshInteractions" class="secondary-btn px-4 py-1.5 text-xs flex items-center gap-2">
            <i class="fas fa-sync-alt"></i>
            <span>تحديث</span>
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-right border-collapse">
            <thead class="bg-slate-800">
              <tr>
                <th class="p-2 border border-slate-700">المستخدم</th>
                <th class="p-2 border border-slate-700">الإعلان</th>
                <th class="p-2 border border-slate-700">نوع التفاعل</th>
                <th class="p-2 border border-slate-700">التاريخ</th>
                <th class="p-2 border border-slate-700">الحالة</th>
                <th class="p-2 border border-slate-700">إثبات الدفع</th>
              </tr>
            </thead>
            <tbody id="interactionsTable"></tbody>
          </table>
        </div>
      </div>

      <!-- حسابات المستخدمين -->
      <div class="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 mb-8 text-[11px] sm:text-xs">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <h3 class="font-bold text-yellow-100 flex items-center gap-2">
            <i class="fas fa-users text-yellow-400"></i>
            <span>تفاصيل حسابات المستخدمين</span>
          </h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-right border-collapse">
            <thead class="bg-slate-800">
              <tr>
                <th class="p-2 border border-slate-700">اسم المستخدم</th>
                <th class="p-2 border border-slate-700">البريد الإلكتروني</th>
                <th class="p-2 border border-slate-700">الدور</th>
                <th class="p-2 border border-slate-700">عدد الإعلانات</th>
                <th class="p-2 border border-slate-700">التفاعلات</th>
                <th class="p-2 border border-slate-700">الحالة</th>
              </tr>
            </thead>
            <tbody id="accountsTable"></tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- مودال الدفع -->
  <div id="paymentModal" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 hidden px-4">
    <div class="bg-slate-950 border border-slate-700 rounded-2xl max-w-md w-full p-5 sm:p-6 text-xs sm:text-sm text-gray-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-yellow-100 flex items-center gap-2 text-sm sm:text-base">
          <i class="fas fa-credit-card text-yellow-400"></i>
          <span>إتمام الدفع عبر Baridimob</span>
        </h3>
        <button id="closePaymentModal" class="text-gray-400 hover:text-gray-200 text-lg">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="space-y-4">
        <div class="bg-slate-900 border border-yellow-500/40 rounded-xl p-4">
          <div class="flex items-start gap-3 mb-3">
            <div class="bg-yellow-400 text-black p-2 rounded-xl">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <div>
              <p class="font-bold text-xs sm:text-sm text-yellow-100">الدفع عبر Baridimob</p>
              <p class="text-[11px] text-gray-300">سيتم توجيهك إلى موقع Baridimob الرسمي لإتمام عملية الدفع، ثم تعود لإدخال رقم عملية الدفع هنا.</p>
            </div>
          </div>
          <div class="bg-slate-950/80 border border-yellow-500/30 rounded-xl p-3 text-[11px] text-gray-200">
            <p class="font-semibold mb-1">تنبيه مهم:</p>
            <ul class="list-disc pr-4 space-y-1">
              <li>بعد إتمام الدفع، احتفظ برقم العملية (مرجع الدفع).</li>
              <li>أدخل رقم العملية في الحقل أدناه ليتم إرساله للمدير لمراجعة الدفع.</li>
              <li>يبقى المبلغ في حالة حجز حتى تأكيد الصفقة.</li>
            </ul>
          </div>
        </div>
        <div class="bg-slate-900 border border-slate-700 rounded-xl p-3 space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-300">الإعلان:</span>
            <span id="paymentAdTitle" class="font-bold text-yellow-200"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">المبلغ:</span>
            <span id="paymentAmount" class="font-bold text-emerald-400 text-sm"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">عمولة المنصة:</span>
            <span id="paymentCommission" class="font-bold text-gray-200"></span>
          </div>
          <div class="border-t border-slate-700 pt-2 mt-1 flex justify-between">
            <span class="text-gray-300 font-bold">الإجمالي:</span>
            <span id="paymentTotal" class="font-extrabold text-sky-400 text-sm"></span>
          </div>
        </div>
        <div>
          <label class="block mb-1 text-gray-200 font-semibold">رقم عملية الدفع / مرجع التحويل <span class="text-yellow-400">*</span></label>
          <input id="paymentProof" type="text" class="form-input w-full rounded-xl border border-slate-600 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-gray-100" placeholder="مثال: 1234567890" />
          <p class="text-[10px] text-gray-400 mt-1">الرجاء إدخال الرقم كما يظهر في تطبيق/موقع Baridimob.</p>
        </div>
        <div class="grid gap-2 sm:grid-cols-2 mt-2">
          <button id="confirmPayment" class="secondary-btn w-full py-2 text-xs sm:text-sm flex items-center justify-center gap-2">
            <i class="fas fa-external-link-alt"></i>
            <span>إتمام الدفع وإرسال الإثبات</span>
          </button>
          <button id="cancelPayment" class="bg-slate-800 hover:bg-slate-700 text-gray-100 w-full py-2 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2">
            <i class="fas fa-times"></i>
            <span>إلغاء</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- مودال التواصل مع المعلن -->
  <div id="contactModal" class="fixed inset-0 bg-black/75 flex items-center justify-center z-50 hidden px-4">
    <div class="bg-slate-950 border border-slate-700 rounded-2xl max-w-md w-full p-5 sm:p-6 text-xs sm:text-sm text-gray-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-yellow-100 flex items-center gap-2 text-sm sm:text-base">
          <i class="fas fa-handshake text-yellow-400"></i>
          <span>تم إرسال طلب التعامل</span>
        </h3>
        <button id="closeContactModal" class="text-gray-400 hover:text-gray-200 text-lg">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="space-y-4">
        <div class="bg-emerald-900/40 border border-emerald-500/50 rounded-xl p-3">
          <p class="font-bold text-emerald-200 mb-1">تم إرسال طلب التواصل مع المعلن بنجاح.</p>
          <p class="text-[11px] text-emerald-100">سيتم إعلام المعلن برغبتك في التعامل معه، ويمكنك متابعة حالة الطلب من صفحة حسابك.</p>
        </div>
        <div class="bg-slate-900 border border-slate-700 rounded-xl p-3 space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-300">المعلن:</span>
            <span id="contactAdvertiser" class="font-bold text-yellow-200"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">الإعلان:</span>
            <span id="contactAdTitle" class="font-bold text-gray-100"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">المبلغ:</span>
            <span id="contactAdAmount" class="font-bold text-emerald-400"></span>
          </div>
        </div>
        <p class="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
          <i class="fas fa-info-circle text-yellow-400"></i>
          <span>جميع التواصل يتم داخل المنصة لحماية حقوق الطرفين.</span>
        </p>
        <button id="closeContact" class="primary-btn w-full py-2 text-xs sm:text-sm flex items-center justify-center gap-2">
          <i class="fas fa-check"></i>
          <span>موافق</span>
        </button>
      </div>
    </div>
  </div>

  <!-- الإشعارات -->
  <div id="notifications" class="fixed bottom-4 left-4 z-50 space-y-2"></div>

  <!-- طبقة تحميل عامة -->
  <div id="globalLoader" class="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] hidden">
    <div class="flex flex-col items-center gap-3 text-yellow-300 text-sm">
      <div class="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      <span>جاري المعالجة، يرجى الانتظار لحظات...</span>
    </div>
  </div>

  <!-- تذييل -->
  <footer class="mt-10 bg-black/90 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 py-7 text-xs sm:text-sm text-gray-300">
      <div class="grid gap-6 md:grid-cols-3 mb-5">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="bg-yellow-400 text-black p-2 rounded-xl">
              <i class="fas fa-sack-dollar fa-lg"></i>
            </div>
            <h3 class="font-bold text-sm sm:text-base">منصة <span class="text-yellow-300">الوساطة dzbuy</span></h3>
          </div>
          <p class="text-[11px] sm:text-xs text-gray-400">منصة وسيطة تربط بين التجار والمسوقين باتفاق واضح، ودفع آمن عبر Baridimob، وحماية كاملة لحقوق الطرفين.</p>
        </div>
        <div>
          <h4 class="font-bold text-yellow-200 mb-2 text-sm">روابط سريعة</h4>
          <ul class="space-y-1">
            <li><button data-view="home" class="quick-link text-gray-400 hover:text-yellow-300">الرئيسية</button></li>
            <li><button data-view="user" class="quick-link text-gray-400 hover:text-yellow-300">الإعلانات</button></li>
            <li><a href="#howItWorks" class="text-gray-400 hover:text-yellow-300">كيف تعمل</a></li>
          </ul>
        </div>
        <div class="space-y-1">
          <h4 class="font-bold text-yellow-200 mb-2 text-sm">معلومات</h4>
          <p class="text-[11px] sm:text-xs text-gray-400 flex items-center gap-1"><i class="fas fa-shield-alt text-yellow-300"></i><span>الدفع الآمن عبر Baridimob مع إثبات دفع يراجع من طرف المدير.</span></p>
          <p class="text-[11px] sm:text-xs text-gray-500">جميع الحقوق محفوظة © <span class="font-semibold">2025</span></p>
        </div>
      </div>
      <div class="border-t border-slate-800 pt-3 text-center text-[11px] text-gray-500">
        <p>تصميم وتطوير منصة الوساطة dzbuy - الربط الآمن بين التجار والمسوقين</p>
      </div>
    </div>
  </footer>

  <!-- سكربت Firebase والمنطق -->
  <script type="module">
    // =======================
    // 1) إعداد Firebase
    // =======================
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import {
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
    } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

    import {
      getFirestore,
      collection,
      doc,
      getDoc,
      getDocs,
      setDoc,
      addDoc,
      updateDoc,
      query,
      where,
      orderBy,
      serverTimestamp,
    } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

    // هام: استبدل هذه القيم بقيم مشروعك من Firebase Console
    const firebaseConfig = {
      apiKey: "AIzaSyCqcjZJJ6drICT50bYbBz2L1L91LsEcxfY",
      authDomain: "dzbigbuy.firebaseapp.com",
      projectId: "dzbigbuy",
      storageBucket: "dzbigbuy.firebasestorage.app",
      messagingSenderId: "215071629520",
      appId: "1:215071629520:web:656ddb2fc6c7b03387fed5",
      measurementId: "G-HFV5DSXGZZ",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
// --- كود التسجيل السريع الجديد ---
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // جلب البيانات من الحقول
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const role = document.getElementById('regRole').value;

        try {
            // 1. إنشاء الحساب فوراً
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. التحويل اللحظي لقسم "حسابي" (هنا السر في السرعة)
            document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
            const accountSec = document.getElementById('accountSection');
            if(accountSec) accountSec.classList.remove('hidden');
            
            showNotification(lang === 'ar' ? "تم التسجيل بنجاح!" : "Welcome!", "success");

            // 3. تحديث البيانات في الخلفية دون جعل المستخدم ينتظر
            updateProfile(user, { displayName: name });
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name,
                email,
                role,
                balance: 0,
                createdAt: serverTimestamp()
            }).then(() => {
                if (typeof renderAccount === 'function') renderAccount();
            });

        } catch (error) {
            console.error("Error:", error);
            showNotification(lang === 'ar' ? "خطأ: تأكد من البيانات أو أن الإيميل مستخدم" : "Registration Error", "error");
        }
    });
}
// --- نهاية كود التسجيل السريع ---

    // بريد المدير (أنت) - قم بتعديله لما يناسبك
    const ADMIN_EMAIL = "admin@dzbigbuy.com";

    // =======================
    // 2) متغيرات عامة و DOM
    // =======================
    let currentUser = null; // من Firebase Auth
    let currentUserProfile = null; // من Firestore (users)

    const homeView = document.getElementById("homeView");
    const userView = document.getElementById("userView");
    const registerView = document.getElementById("registerView");
    const accountView = document.getElementById("accountView");
    const adminView = document.getElementById("adminView");

    const showHome = document.getElementById("showHome");
    const showUserViewBtn = document.getElementById("showUserView");
    const showTraderAdsBtn = document.getElementById("showTraderAds");
    const showMarketerAdsBtn = document.getElementById("showMarketerAds");
    const showRegisterBtn = document.getElementById("showRegister");
    const showAccountBtn = document.getElementById("showAccount");
    const showAdminViewBtn = document.getElementById("showAdminView");

    const showRegisterMobile = document.getElementById("showRegisterMobile");
    const showAccountMobile = document.getElementById("showAccountMobile");
    const showTraderAdsMobileInline = document.getElementById("showTraderAdsMobileInline");
    const showMarketerAdsMobileInline = document.getElementById("showMarketerAdsMobileInline");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const showHomeMobile = document.getElementById("showHomeMobile");
    const showUserViewMobile = document.getElementById("showUserViewMobile");
    const showTraderAdsMobile = document.getElementById("showTraderAdsMobile");
    const showMarketerAdsMobile = document.getElementById("showMarketerAdsMobile");
    const showAccountMobileMenu = document.getElementById("showAccountMobileMenu");
    const showAdminViewMobile = document.getElementById("showAdminViewMobile");
    const showRegisterMobileMenu = document.getElementById("showRegisterMobileMenu");

    const userWelcome = document.getElementById("userWelcome");

    const adsTradersContainer = document.getElementById("adsTradersContainer");
    const adsMarketersContainer = document.getElementById("adsMarketersContainer");
    const traderAdsSection = adsTradersContainer ? adsTradersContainer.parentElement : null;
    const marketerAdsSection = adsMarketersContainer ? adsMarketersContainer.parentElement : null;

    const addAdBtn = document.getElementById("addAdBtn");
    const adTitleInput = document.getElementById("adTitle");
    const adDescriptionInput = document.getElementById("adDescription");
    const adPriceInput = document.getElementById("adPrice");
    const advertiserNameInput = document.getElementById("advertiserName");
    const adTypeInput = document.getElementById("adType");

    const selectTrader = document.getElementById("selectTrader");
    const selectMarketer = document.getElementById("selectMarketer");
    const registrationForm = document.getElementById("registrationForm");
    const registrationConfirmation = document.getElementById("registrationConfirmation");
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginError = document.getElementById("loginError");
    const formTitle = document.getElementById("formTitle");
    const formSubtitle = document.getElementById("formSubtitle");
    const accountTypeBadge = document.getElementById("accountTypeBadge");
    const userTypeInput = document.getElementById("userType");
    const traderFields = document.getElementById("traderFields");
    const marketerFields = document.getElementById("marketerFields");
    const cancelRegistration = document.getElementById("cancelRegistration");
    const confirmationEmail = document.getElementById("confirmationEmail");
    const goToLogin = document.getElementById("goToLogin");
    const resendActivation = document.getElementById("resendActivation");

    const accountGuestMessage = document.getElementById("accountGuestMessage");
    const accountContent = document.getElementById("accountContent");
    const goToRegisterFromAccount = document.getElementById("goToRegisterFromAccount");
    const accountName = document.getElementById("accountName");
    const accountEmail = document.getElementById("accountEmail");
    const accountRole = document.getElementById("accountRole");
    const logoutBtn = document.getElementById("logoutBtn");
    const myAdsCount = document.getElementById("myAdsCount");
    const myInteractionsCount = document.getElementById("myInteractionsCount");
    const myRoleBadge = document.getElementById("myRoleBadge");
    const myAdsContainer = document.getElementById("myAdsContainer");
    const myInteractionsTable = document.getElementById("myInteractionsTable");
    const noMyAds = document.getElementById("noMyAds");
    const noMyInteractions = document.getElementById("noMyInteractions");
    const createAdFromAccount = document.getElementById("createAdFromAccount");

    const interactionsTable = document.getElementById("interactionsTable");
    const accountsTable = document.getElementById("accountsTable");
    const refreshInteractions = document.getElementById("refreshInteractions");

    const statsAds = document.getElementById("statsAds");
    const statsInteractions = document.getElementById("statsInteractions");
    const statsPayments = document.getElementById("statsPayments");
    const statsUsers = document.getElementById("statsUsers");

    const paymentModal = document.getElementById("paymentModal");
    const closePaymentModal = document.getElementById("closePaymentModal");
    const cancelPayment = document.getElementById("cancelPayment");
    const confirmPayment = document.getElementById("confirmPayment");
    const paymentAdTitle = document.getElementById("paymentAdTitle");
    const paymentAmount = document.getElementById("paymentAmount");
    const paymentCommission = document.getElementById("paymentCommission");
    const paymentTotal = document.getElementById("paymentTotal");
    const paymentProof = document.getElementById("paymentProof");

    const contactModal = document.getElementById("contactModal");
    const closeContactModal = document.getElementById("closeContactModal");
    const closeContact = document.getElementById("closeContact");
    const contactAdvertiser = document.getElementById("contactAdvertiser");
    const contactAdTitle = document.getElementById("contactAdTitle");
    const contactAdAmount = document.getElementById("contactAdAmount");

    const heroRegisterTrader = document.getElementById("heroRegisterTrader");
    const heroLearnMore = document.getElementById("heroLearnMore");
    const startAsTrader = document.getElementById("startAsTrader");
    const startAsMarketer = document.getElementById("startAsMarketer");

    const quickLinks = document.querySelectorAll(".quick-link");

    const langToggleBtn = document.getElementById("langToggle");
    const langToggleLabel = document.getElementById("langToggleLabel");

    // =======================
    // 3) الترجمة (AR/FR/EN)
    // =======================
    const translations = {
      ar: {
        navBrandTop: "منصة الوساطة",
        navBrandSub: "ربط التجار بالمسوقين بدفع آمن عبر Baridimob",
        navHomeText: "الرئيسية",
        navAdsText: "الإعلانات",
        navTraderAdsText: "إعلانات التجار",
        navMarketerAdsText: "إعلانات المسوقين",
        navAccountText: "حسابي",
        navAdminText: "لوحة المدير",
        navRegisterText: "التسجيل",
        heroTitleMain: "منصة الوساطة <span class=\"text-yellow-300\">dzbuy</span> تربط التجار بالمسوقين",
        heroTitleSub:
          "سجّل، انشر إعلانك، ودع المسوقين يجلبون لك العملاء",
        heroP1:
          "لا تحتاج للبحث عن مسوقين أو التفاوض معهم يدويًا. في منصة الوساطة dzbuy يعرض التاجر منتجه بشروط واضحة، ويتقدّم المسوقون بطلب التعامل، مع حماية كاملة لحقوق الطرفين داخل المنصة.",
        heroP2:
          "لا مكالمات عشوائية، لا أرقام هاتف، ولا تحويلات خارجية. كل التعاملات، من الاتفاق حتى الدفع عبر Baridimob، تتم داخل بيئة واحدة واضحة وآمنة.",
        howTitle: "كيف تعمل المنصة؟",
        howSubtitle:
          "ثلاث خطوات واضحة من التسجيل إلى استلام الأجر أو إطلاق حملتك التسويقية.",
        adsPageTitle: "الإعلانات المتاحة",
        adsPageSubtitle:
          "تصفّح العروض، واطلب التعامل أو ادفع بأمان عبر Baridimob. جميع العمليات موثقة في حسابك.",
        registerTitle: "التسجيل في المنصة",
        registerSubtitle:
          "سجّل الآن كتاجر أو مسوق. التسجيل هو المفتاح لاستخدام جميع مميزات المنصة: إضافة الإعلانات، طلب التعامل، والدفع.",
        accountTitle: "حسابي",
        accountSubtitle:
          "من هنا يمكنك متابعة بيانات حسابك، إعلاناتك، وتعاملاتك داخل المنصة.",
        adminTitle: "لوحة تحكم المدير",
        adminSubtitle:
          "مراقبة التفاعلات، مراجعة إثباتات الدفع، وإدارة حسابات المستخدمين (متاحة فقط لحساب المدير).",
      },
      fr: {
        navBrandTop: "Plateforme d'intermédiation",
        navBrandSub:
          "Relier commerçants et marketeurs avec un paiement sécurisé via Baridimob",
        navHomeText: "Accueil",
        navAdsText: "Annonces",
        navTraderAdsText: "Annonces commerçants",
        navMarketerAdsText: "Annonces marketeurs",
        navAccountText: "Mon compte",
        navAdminText: "Admin",
        navRegisterText: "Inscription",
        heroTitleMain:
          "La plateforme d'intermédiation <span class=\"text-yellow-300\">dzbuy</span> relie commerçants et marketeurs",
        heroTitleSub:
          "Inscrivez-vous, publiez votre annonce et laissez les marketeurs vous apporter des clients",
        heroP1:
          "Plus besoin de chercher des marketeurs manuellement. Sur dzbuy, le commerçant publie son offre avec des conditions claires et les marketeurs demandent à collaborer, avec protection des deux parties.",
        heroP2:
          "Pas d'appels aléatoires, pas de numéros de téléphone, pas de virements externes. Tout se fait sur la plateforme, du contrat jusqu'au paiement via Baridimob.",
        howTitle: "Comment ça marche ?",
        howSubtitle:
          "Trois étapes simples, de l'inscription jusqu'au paiement sécurisé.",
        adsPageTitle: "Annonces disponibles",
        adsPageSubtitle:
          "Consultez les offres, demandez à collaborer ou payez en toute sécurité via Baridimob. Toutes les opérations sont enregistrées dans votre compte.",
        registerTitle: "Inscription sur la plateforme",
        registerSubtitle:
          "Inscrivez-vous en tant que commerçant ou marketeur. L'inscription est la clé pour publier des annonces, demander des collaborations et payer.",
        accountTitle: "Mon compte",
        accountSubtitle:
          "Gérez vos informations, vos annonces et vos interactions sur la plateforme.",
        adminTitle: "Tableau de bord administrateur",
        adminSubtitle:
          "Suivi des interactions, vérification des preuves de paiement et gestion des comptes utilisateurs (réservé à l'administrateur).",
      },
      en: {
        navBrandTop: "Mediation platform",
        navBrandSub:
          "Connecting merchants and marketers with secure payment via Baridimob",
        navHomeText: "Home",
        navAdsText: "Ads",
        navTraderAdsText: "Merchant ads",
        navMarketerAdsText: "Marketer ads",
        navAccountText: "My account",
        navAdminText: "Admin panel",
        navRegisterText: "Sign up",
        heroTitleMain:
          "<span class=\"text-yellow-300\">dzbuy</span> mediation platform connects merchants with marketers",
        heroTitleSub:
          "Sign up, publish your ad and let marketers bring you customers",
        heroP1:
          "No need to search for marketers manually. On dzbuy, the merchant posts a clear offer and marketers request to collaborate, with full protection for both sides.",
        heroP2:
          "No random calls, no phone numbers, no external transfers. Everything happens inside the platform, from agreement to payment via Baridimob.",
        howTitle: "How does it work?",
        howSubtitle:
          "Three clear steps from registration to receiving payment or launching your campaign.",
        adsPageTitle: "Available ads",
        adsPageSubtitle:
          "Browse offers, request to collaborate or pay securely via Baridimob. All operations are logged in your account.",
        registerTitle: "Sign up to the platform",
        registerSubtitle:
          "Register as a merchant or marketer. Registration is the key to publish ads, request collaborations and pay.",
        accountTitle: "My account",
        accountSubtitle:
          "From here you can manage your profile, your ads and your interactions on the platform.",
        adminTitle: "Admin control panel",
        adminSubtitle:
          "Monitor interactions, review payment proofs and manage user accounts (admin only).",
      },
    };

    function updateLangToggle(lang) {
      if (!langToggleBtn || !langToggleLabel) return;
      if (lang === "ar") langToggleLabel.textContent = "AR";
      if (lang === "fr") langToggleLabel.textContent = "FR";
      if (lang === "en") langToggleLabel.textContent = "EN";
    }

    function applyTranslations(lang) {
      const dict = translations[lang] || translations.ar;
      Object.keys(dict).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === "heroTitleMain" || id === "heroTitleSub") {
          el.innerHTML = dict[id];
        } else {
          el.textContent = dict[id];
        }
      });
    }

    function setLanguage(lang) {
      if (!translations[lang]) lang = "ar";
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      updateLangToggle(lang);
      applyTranslations(lang);
    }

    // =======================
    // 4) أدوات عامة
    // =======================
    function showNotification(message, type = "info") {
      const notificationsContainer = document.getElementById("notifications");
      const notificationId = "notification-" + Date.now();
      let bgColor = "bg-blue-500";
      let icon = "fas fa-info-circle";
      if (type === "success") {
        bgColor = "bg-emerald-500";
        icon = "fas fa-check-circle";
      } else if (type === "warning") {
        bgColor = "bg-yellow-500";
        icon = "fas fa-exclamation-triangle";
      } else if (type === "error") {
        bgColor = "bg-red-500";
        icon = "fas fa-times-circle";
      }
      const notification = document.createElement("div");
      notification.id = notificationId;
      notification.className = `notification ${bgColor} text-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs sm:text-sm`;
      notification.innerHTML = `
        <i class="${icon}"></i>
        <span class="flex-1">${message}</span>
        <button aria-label="إغلاق" class="text-white/80 hover:text-white text-xs"><i class="fas fa-times"></i></button>
      `;
      notification.querySelector("button").addEventListener("click", () => {
        notification.style.animation = "fadeOut 0.3s forwards";
        setTimeout(() => notification.remove(), 300);
      });
      notificationsContainer.appendChild(notification);
      setTimeout(() => {
        if (document.getElementById(notificationId)) {
          notification.style.animation = "fadeOut 0.3s forwards";
          setTimeout(() => notification.remove(), 300);
        }
      }, 4000);
    }

    function showLoader() {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.classList.remove("hidden");
    }

    function hideLoader() {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.classList.add("hidden");
    }

    function openModal(modal) {
      modal.classList.remove("hidden");
    }

    function closeModal(modal) {
      modal.classList.add("hidden");
    }

    let currentView = "home";

    function switchView(view) {
      if (view === "admin" && (!currentUser || !currentUserProfile || currentUserProfile.role !== "مدير")) {
        showNotification("هذه المنطقة مخصصة للمدير فقط.", "error");
        return;
      }
      currentView = view;
      homeView.classList.add("hidden");
      userView.classList.add("hidden");
      registerView.classList.add("hidden");
      accountView.classList.add("hidden");
      adminView.classList.add("hidden");

      if (view === "user") {
        userView.classList.remove("hidden");
        if (traderAdsSection) traderAdsSection.classList.remove("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
      }

      let target = null;
      if (view === "home") {
        homeView.classList.remove("hidden");
        target = homeView;
      }
      if (view === "register") {
        registerView.classList.remove("hidden");
        target = registerView;
      }
      if (view === "account") {
        accountView.classList.remove("hidden");
        target = accountView;
      }
      if (view === "admin") {
        adminView.classList.remove("hidden");
        target = adminView;
      }

      document.querySelectorAll("nav .tab-button").forEach((btn) => btn.classList.remove("active"));
      if (view === "home") showHome.classList.add("active");
      if (view === "user") showUserViewBtn.classList.add("active");
      if (view === "register") showRegisterBtn.classList.add("active");
      if (view === "account") showAccountBtn.classList.add("active");
      if (view === "admin") showAdminViewBtn.classList.add("active");

      mobileMenu.classList.add("hidden");
      if (view === "account") renderAccount();

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // =======================
    // 5) منطق Firebase: المستخدمون
    // =======================
    function updateAuthUI() {
      // نعتبر أن المستخدم مسجّل دخول إذا كان currentUser موجودًا، حتى لو فشل تحميل ملفه من Firestore
      if (currentUser) {
        // إظهار أزرار حسابي
        showAccountBtn.classList.remove("hidden");
        showAccountMobile.classList.remove("hidden");
        showAccountMobileMenu.classList.remove("hidden");

        // إخفاء أزرار التسجيل
        showRegisterBtn.classList.add("hidden");
        showRegisterMobile.classList.add("hidden");
        showRegisterMobileMenu.classList.add("hidden");

        // نص الترحيب: يعتمد على ملف المستخدم إن توفر، وإلا نستخدم البريد فقط
        if (currentUserProfile) {
          userWelcome.classList.remove("hidden");
          userWelcome.textContent = `مرحبا، ${currentUserProfile.name} (${currentUserProfile.role})`;
        } else if (currentUser.email) {
          userWelcome.classList.remove("hidden");
          userWelcome.textContent = currentUser.email;
        } else {
          userWelcome.classList.add("hidden");
          userWelcome.textContent = "";
        }

        // صلاحيات المدير: تعتمد على ملف المستخدم إن توفر، أو على بريد ADMIN_EMAIL مباشرة
        if (
          (currentUserProfile && (currentUserProfile.email === ADMIN_EMAIL || currentUserProfile.role === "مدير")) ||
          (!currentUserProfile && currentUser.email === ADMIN_EMAIL)
        ) {
          showAdminViewBtn.classList.remove("hidden");
          showAdminViewMobile.classList.remove("hidden");
        } else {
          showAdminViewBtn.classList.add("hidden");
          showAdminViewMobile.classList.add("hidden");
        }
      } else {
        // في حال عدم وجود مستخدم مسجّل
        showAccountBtn.classList.add("hidden");
        showAccountMobile.classList.add("hidden");
        showAccountMobileMenu.classList.add("hidden");

        showRegisterBtn.classList.remove("hidden");
        showRegisterMobile.classList.remove("hidden");
        showRegisterMobileMenu.classList.remove("hidden");

        userWelcome.classList.add("hidden");
        userWelcome.textContent = "";

        showAdminViewBtn.classList.add("hidden");
        showAdminViewMobile.classList.add("hidden");
      }
    }

    async function loadCurrentUserProfile(user) {
      if (!user) {
        currentUserProfile = null;
        updateAuthUI();
        return;
      }
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        currentUserProfile = { id: snap.id, ...snap.data() };
      } else {
        // في حال لا يوجد ملف، ننشئ ملفًا أساسيًا
        const baseProfile = {
          name: user.email.split("@")[0],
          email: user.email,
          role: user.email === ADMIN_EMAIL ? "مدير" : "تاجر",
          adsCount: 0,
          interactionsCount: 0,
          status: "نشط",
          createdAt: serverTimestamp(),
        };
        await setDoc(userRef, baseProfile, { merge: true });
        currentUserProfile = { id: user.uid, ...baseProfile };
      }
      // تحديث واجهة المصادقة فقط، وترك تحميل البيانات التفصيلية ليتم عند فتح الصفحات المعنية
      updateAuthUI();
    }

    onAuthStateChanged(auth, (user) => {
      currentUser = user;
      if (!user) {
        currentUserProfile = null;
        updateAuthUI();
        return;
      }
      loadCurrentUserProfile(user).catch((err) => {
        console.error(err);
        // إذا فشل تحميل ملف المستخدم من Firestore (غالبًا بسبب Rules)، ننشئ ملفًا افتراضيًا
        currentUserProfile = {
          id: user.uid,
          name: user.email ? user.email.split("@")[0] : "مستخدم",
          email: user.email || "",
          role: "تاجر",
        };
        showNotification("تم تسجيل الدخول، لكن تعذر تحميل بيانات الحساب من قاعدة البيانات. تأكد من إعدادات Firestore.", "warning");
        updateAuthUI();
      });
    });

    // =======================
    // 6) الإعلانات (Firestore)
    // =======================
    async function renderAds() {
      if (!adsTradersContainer || !adsMarketersContainer) return;
      adsTradersContainer.innerHTML = "";
      adsMarketersContainer.innerHTML = "";

      try {
        const adsSnap = await getDocs(query(collection(db, "ads"), orderBy("createdAt", "desc")));
        adsSnap.forEach((docSnap) => {
          const ad = { id: docSnap.id, ...docSnap.data() };
          const ownerRole = ad.ownerRole || "تاجر";

          const adElement = document.createElement("div");
          adElement.className = "bg-slate-900/95 border border-slate-700 rounded-2xl overflow-hidden flex flex-col";
          adElement.innerHTML = `
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex items-start justify-between gap-2 mb-2">
              <div>
                <div class="flex items-center gap-1 mb-1">
                  <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-900/40 text-yellow-200">${ad.type || "إعلان"}</span>
                  <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-100">${ownerRole}</span>
                </div>
                <h3 class="text-sm sm:text-base font-bold text-yellow-100">${ad.title}</h3>
              </div>
              <span class="px-2.5 py-1 rounded-xl bg-slate-950 text-emerald-300 text-xs font-bold">${ad.price || 0} دج</span>
            </div>
            <p class="text-[11px] sm:text-xs text-gray-300 mb-3 flex-1">${ad.description || ""}</p>
            <div class="flex flex-wrap items-center justify-between gap-1 text-[10px] text-gray-400 mb-3">
              <span class="flex items-center gap-1"><i class="fas fa-user text-yellow-400"></i>${ad.advertiserName || ad.ownerName || "معلن"}</span>
              <span class="flex items-center gap-1"><i class="fas fa-calendar-alt text-yellow-400"></i>${ad.createdAt && ad.createdAt.toDate ? ad.createdAt.toDate().toLocaleDateString("ar-DZ") : ""}</span>
            </div>
            <div class="grid gap-2 sm:grid-cols-2 mt-auto">
              <button class="deal-btn primary-btn py-1.5 text-[11px] sm:text-xs flex items-center justify-center gap-1.5" data-id="${ad.id}" data-advertiser="${ad.advertiserName || ad.ownerName || ""}" data-title="${ad.title}" data-price="${ad.price || 0}" data-owner-role="${ownerRole}">
                <i class="fas fa-handshake"></i>
                <span>أريد التعامل مع المعلن</span>
              </button>
              <button class="payment-btn secondary-btn py-1.5 text-[11px] sm:text-xs flex items-center justify-center gap-1.5" data-id="${ad.id}" data-price="${ad.price || 0}" data-title="${ad.title}" data-advertiser="${ad.advertiserName || ad.ownerName || ""}">
                <i class="fas fa-credit-card"></i>
                <span>دفع ${ad.price || 0} دج</span>
              </button>
            </div>
          </div>
        `;

          if (ownerRole === "مسوق") {
            adsMarketersContainer.appendChild(adElement);
          } else {
            adsTradersContainer.appendChild(adElement);
          }
        });

        attachAdButtonsHandlers();
      } catch (err) {
        console.error(err);
        showNotification("تعذر تحميل الإعلانات من الخادم.", "error");
      }
    }

    function attachAdButtonsHandlers() {
      document.querySelectorAll(".deal-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
          if (!currentUser || !currentUserProfile) {
            showNotification("يجب التسجيل أو تسجيل الدخول أولاً قبل طلب التعامل مع المعلن.", "warning");
            switchView("register");
            return;
          }

          const advertiserRole = btn.getAttribute("data-owner-role") || "تاجر";

          // شروط التعاملات:
          // التاجر يمكنه طلب التعامل مع أي مسوق، والعكس صحيح
          // لا يُسمح لتاجر بطلب تاجر، ولا لمسوق بطلب مسوق
          if (
            (currentUserProfile.role === "تاجر" && advertiserRole !== "مسوق") ||
            (currentUserProfile.role === "مسوق" && advertiserRole !== "تاجر")
          ) {
            showNotification("لا يمكنك طلب التعامل مع حساب من نفس نوع حسابك.", "warning");
            return;
          }

          const advertiser = btn.getAttribute("data-advertiser");
          const title = btn.getAttribute("data-title");
          const price = Number(btn.getAttribute("data-price")) || 0;

          contactAdvertiser.textContent = advertiser;
          contactAdTitle.textContent = title;
          contactAdAmount.textContent = price + " دج";

          try {
            await addDoc(collection(db, "interactions"), {
              userUid: currentUser.uid,
              userName: currentUserProfile.name,
              userEmail: currentUserProfile.email,
              adTitle: title,
              advertiser,
              type: "طلب تعامل",
              status: "قيد الانتظار",
              proof: "",
              createdAt: serverTimestamp(),
            });
            await renderAdminData();
            await renderAccount();
            openModal(contactModal);
            showNotification("تم إرسال طلب التواصل للمعلن. يمكنك متابعة حالته من صفحة حسابي.", "success");
          } catch (err) {
            console.error(err);
            showNotification("تعذر تسجيل طلب التعامل.", "error");
          }
        });
      });

      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (!currentUser || !currentUserProfile) {
            showNotification("يجب التسجيل أو تسجيل الدخول أولاً قبل محاولة الدفع.", "warning");
            switchView("register");
            return;
          }
          const title = btn.getAttribute("data-title");
          const price = Number(btn.getAttribute("data-price")) || 0;
          const commission = Math.round(price * 0.1);
          const total = price + commission;

          paymentAdTitle.textContent = title;
          paymentAmount.textContent = price + " دج";
          paymentCommission.textContent = commission + " دج (10%)";
          paymentTotal.textContent = total + " دج";
          paymentProof.value = "";

          openModal(paymentModal);
        });
      });
    }

    // =======================
    // 7) التفاعلات ولوحة المدير
    // =======================
    async function renderAdminData() {
      if (!currentUser || !currentUserProfile || (currentUserProfile.email !== ADMIN_EMAIL && currentUserProfile.role !== "مدير")) {
        // يمكن مع ذلك تحديث بعض الإحصاءات العامة لاحقًا
        return;
      }
      try {
        const [adsSnap, interactionsSnap, usersSnap] = await Promise.all([
          getDocs(collection(db, "ads")),
          getDocs(collection(db, "interactions")),
          getDocs(collection(db, "users")),
        ]);

        // إحصائيات
        statsAds.textContent = adsSnap.size;
        statsInteractions.textContent = interactionsSnap.size;
        statsPayments.textContent = interactionsSnap.docs.filter((d) => (d.data().type || "").includes("دفع")).length;
        statsUsers.textContent = usersSnap.size;

        // التفاعلات
        interactionsTable.innerHTML = "";
        interactionsSnap.forEach((docSnap) => {
          const inter = { id: docSnap.id, ...docSnap.data() };
          let statusColor = "bg-yellow-900/40 text-yellow-200";
          if (inter.status === "مكتمل") statusColor = "bg-emerald-900/40 text-emerald-200";
          if (inter.status === "مرفوض") statusColor = "bg-red-900/40 text-red-200";

          let typeColor = "bg-sky-900/40 text-sky-200";
          if ((inter.type || "").includes("دفع")) typeColor = "bg-purple-900/40 text-purple-200";

          const row = document.createElement("tr");
          row.className = "hover:bg-slate-800";
          row.innerHTML = `
            <td class="p-2 border border-slate-700 text-gray-100">${inter.userName || inter.userEmail || "--"}</td>
            <td class="p-2 border border-slate-700 text-gray-200">${inter.adTitle || "--"}</td>
            <td class="p-2 border border-slate-700"><span class="px-2 py-0.5 rounded-full text-[10px] ${typeColor}">${inter.type || "--"}</span></td>
            <td class="p-2 border border-slate-700 text-gray-300">${inter.createdAt && inter.createdAt.toDate ? inter.createdAt.toDate().toLocaleString("ar-DZ") : "--"}</td>
            <td class="p-2 border border-slate-700"><span class="px-2 py-0.5 rounded-full text-[10px] ${statusColor}">${inter.status || "--"}</span></td>
            <td class="p-2 border border-slate-700 text-gray-200 text-[10px]">${inter.proof || "-"}</td>
          `;
          interactionsTable.appendChild(row);
        });

        // المستخدمين
        accountsTable.innerHTML = "";
        usersSnap.forEach((docSnap) => {
          const user = { id: docSnap.id, ...docSnap.data() };
          let roleColor = "bg-yellow-900/40 text-yellow-200";
          if (user.role === "مسوق") roleColor = "bg-sky-900/40 text-sky-200";
          if (user.role === "مدير") roleColor = "bg-purple-900/40 text-purple-200";

          let statusColor = "bg-emerald-900/40 text-emerald-200";
          if (user.status && user.status !== "نشط") statusColor = "bg-slate-800 text-gray-200";

          const row = document.createElement("tr");
          row.className = "hover:bg-slate-800";
          row.innerHTML = `
            <td class="p-2 border border-slate-700 text-gray-100 font-bold">${user.name || "--"}</td>
            <td class="p-2 border border-slate-700 text-gray-200">${user.email || "--"}</td>
            <td class="p-2 border border-slate-700"><span class="px-2 py-0.5 rounded-full text-[10px] ${roleColor}">${user.role || "--"}</span></td>
            <td class="p-2 border border-slate-700 text-center text-gray-100">${user.adsCount || 0}</td>
            <td class="p-2 border border-slate-700 text-center text-gray-100">${user.interactionsCount || 0}</td>
            <td class="p-2 border border-slate-700 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] ${statusColor}">${user.status || "نشط"}</span></td>
          `;
          accountsTable.appendChild(row);
        });
      } catch (err) {
        console.error(err);
        showNotification("تعذر تحميل بيانات لوحة المدير.", "error");
      }
    }

    // =======================
    // 8) صفحة حسابي (إعلاناتي وتعاملاتي)
    // =======================
    async function renderAccount() {
      if (!currentUser || !currentUserProfile) {
        accountGuestMessage.classList.remove("hidden");
        accountContent.classList.add("hidden");
        return;
      }

      accountGuestMessage.classList.add("hidden");
      accountContent.classList.remove("hidden");

      accountName.textContent = currentUserProfile.name || "--";
      accountEmail.textContent = currentUserProfile.email || "--";
      accountRole.textContent = currentUserProfile.role || "--";
      myRoleBadge.textContent = currentUserProfile.role || "--";

      try {
        const [myAdsSnap, myInterSnap] = await Promise.all([
          getDocs(query(collection(db, "ads"), where("ownerUid", "==", currentUser.uid))),
          getDocs(query(collection(db, "interactions"), where("userUid", "==", currentUser.uid), orderBy("createdAt", "desc"))),
        ]);

        myAdsCount.textContent = myAdsSnap.size;
        myInteractionsCount.textContent = myInterSnap.size;

        myAdsContainer.innerHTML = "";
        if (myAdsSnap.size === 0) {
          noMyAds.classList.remove("hidden");
        } else {
          noMyAds.classList.add("hidden");
          myAdsSnap.forEach((docSnap) => {
            const ad = { id: docSnap.id, ...docSnap.data() };
            const card = document.createElement("div");
            card.className = "bg-slate-950/80 border border-slate-700 rounded-xl p-3 flex flex-col justify-between text-[11px] sm:text-xs";
            card.innerHTML = `
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="px-2 py-0.5 rounded-full bg-yellow-900/40 text-yellow-200 text-[10px]">${ad.type || "إعلان"}</span>
                  <span class="text-emerald-300 font-bold">${ad.price || 0} دج</span>
                </div>
                <h3 class="font-bold text-yellow-100 mb-0.5 line-clamp-2">${ad.title}</h3>
                <p class="text-gray-300 line-clamp-3">${ad.description || ""}</p>
              </div>
              <div class="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                <span><i class="fas fa-calendar-alt ml-1"></i>${ad.createdAt && ad.createdAt.toDate ? ad.createdAt.toDate().toLocaleDateString("ar-DZ") : ""}</span>
              </div>
            `;
            myAdsContainer.appendChild(card);
          });
        }

        myInteractionsTable.innerHTML = "";
        if (myInterSnap.size === 0) {
          noMyInteractions.classList.remove("hidden");
        } else {
          noMyInteractions.classList.add("hidden");
          myInterSnap.forEach((docSnap) => {
            const inter = { id: docSnap.id, ...docSnap.data() };
            let statusColor = "bg-yellow-900/40 text-yellow-200";
            if (inter.status === "مكتمل") statusColor = "bg-emerald-900/40 text-emerald-200";
            if (inter.status === "مرفوض") statusColor = "bg-red-900/40 text-red-200";
            let typeColor = "bg-sky-900/40 text-sky-200";
            if ((inter.type || "").includes("دفع")) typeColor = "bg-purple-900/40 text-purple-200";
            const row = document.createElement("tr");
            row.innerHTML = `
              <td class="p-1.5 border border-slate-700 text-gray-100">${inter.adTitle || "--"}</td>
              <td class="p-1.5 border border-slate-700"><span class="px-2 py-0.5 rounded-full text-[10px] ${typeColor}">${inter.type || "--"}</span></td>
              <td class="p-1.5 border border-slate-700 text-gray-300">${inter.createdAt && inter.createdAt.toDate ? inter.createdAt.toDate().toLocaleString("ar-DZ") : "--"}</td>
              <td class="p-1.5 border border-slate-700"><span class="px-2 py-0.5 rounded-full text-[10px] ${statusColor}">${inter.status || "--"}</span></td>
            `;
            myInteractionsTable.appendChild(row);
          });
        }
      } catch (err) {
        console.error(err);
        showNotification("تعذر تحميل بيانات حسابك.", "error");
      }
    }

    // =======================
    // 9) التعامل مع التسجيل وتسجيل الدخول
    // =======================
    function activateAccountType(type) {
      if (type === "trader") {
        userTypeInput.value = "trader";
        formTitle.textContent = "تسجيل تاجر جديد";
        formSubtitle.textContent = "املأ البيانات التالية لإتمام التسجيل كتاجر";
        accountTypeBadge.textContent = "تاجر";
        traderFields.classList.remove("hidden");
        marketerFields.classList.add("hidden");
        selectTrader.classList.add("active");
        selectMarketer.classList.remove("active");
      } else {
        userTypeInput.value = "marketer";
        formTitle.textContent = "تسجيل مسوق جديد";
        formSubtitle.textContent = "املأ البيانات التالية لإتمام التسجيل كمسوق";
        accountTypeBadge.textContent = "مسوق";
        traderFields.classList.add("hidden");
        marketerFields.classList.remove("hidden");
        selectTrader.classList.remove("active");
        selectMarketer.classList.add("active");
      }
      registrationForm.classList.remove("hidden");
      registrationConfirmation.classList.add("hidden");
    }

    function setupEventListeners() {
      showHome.addEventListener("click", () => switchView("home"));
      showUserViewBtn.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.remove("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
        setTimeout(() => {
          userView.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      showTraderAdsBtn.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.remove("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.add("hidden");
        setTimeout(() => {
          if (traderAdsSection) traderAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      showMarketerAdsBtn.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.add("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
        setTimeout(() => {
          if (marketerAdsSection) marketerAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      showRegisterBtn.addEventListener("click", () => switchView("register"));
      showAccountBtn.addEventListener("click", () => {
        if (!currentUser || !currentUserProfile) {
          showNotification("يجب تسجيل الدخول للوصول إلى حسابك.", "warning");
          switchView("register");
          return;
        }
        switchView("account");
      });
      showAdminViewBtn.addEventListener("click", () => switchView("admin"));

      mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
      showHomeMobile.addEventListener("click", () => switchView("home"));

      showUserViewMobile.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.remove("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
        setTimeout(() => {
          userView.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      showTraderAdsMobile.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.remove("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.add("hidden");
        setTimeout(() => {
          if (traderAdsSection) traderAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      showMarketerAdsMobile.addEventListener("click", () => {
        switchView("user");
        if (traderAdsSection) traderAdsSection.classList.add("hidden");
        if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
        setTimeout(() => {
          if (marketerAdsSection) marketerAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      });

      if (showTraderAdsMobileInline) {
        showTraderAdsMobileInline.addEventListener("click", () => {
          switchView("user");
          if (traderAdsSection) traderAdsSection.classList.remove("hidden");
          if (marketerAdsSection) marketerAdsSection.classList.add("hidden");
          setTimeout(() => {
            if (traderAdsSection) traderAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        });
      }
      if (showMarketerAdsMobileInline) {
        showMarketerAdsMobileInline.addEventListener("click", () => {
          switchView("user");
          if (traderAdsSection) traderAdsSection.classList.add("hidden");
          if (marketerAdsSection) marketerAdsSection.classList.remove("hidden");
          setTimeout(() => {
            if (marketerAdsSection) marketerAdsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        });
      }

      showRegisterMobile.addEventListener("click", () => switchView("register"));
      showRegisterMobileMenu.addEventListener("click", () => switchView("register"));
      showAccountMobile.addEventListener("click", () => {
        if (!currentUser || !currentUserProfile) {
          showNotification("يجب تسجيل الدخول للوصول إلى حسابك.", "warning");
          switchView("register");
          return;
        }
        switchView("account");
      });
      showAccountMobileMenu.addEventListener("click", () => {
        if (!currentUser || !currentUserProfile) {
          showNotification("يجب تسجيل الدخول للوصول إلى حسابك.", "warning");
          switchView("register");
          return;
        }
        switchView("account");
      });
      showAdminViewMobile.addEventListener("click", () => switchView("admin"));

      heroRegisterTrader.addEventListener("click", () => {
        switchView("register");
        activateAccountType("trader");
      });
      heroLearnMore.addEventListener("click", () => {
        document.getElementById("howItWorks").scrollIntoView({ behavior: "smooth" });
      });
      startAsTrader.addEventListener("click", () => {
        switchView("register");
        activateAccountType("trader");
      });
      startAsMarketer.addEventListener("click", () => {
        switchView("register");
        activateAccountType("marketer");
      });

      quickLinks.forEach((link) => {
        link.addEventListener("click", () => {
          const view = link.getAttribute("data-view");
          if (view === "home") switchView("home");
          if (view === "user") switchView("user");
        });
      });

      if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
          const current = localStorage.getItem("lang") || "ar";
          const order = ["ar", "fr", "en"];
          const idx = order.indexOf(current);
          const nextLang = order[(idx + 1) % order.length];
          setLanguage(nextLang);
        });
      }

      goToRegisterFromAccount.addEventListener("click", () => switchView("register"));

      selectTrader.addEventListener("click", () => activateAccountType("trader"));
      selectMarketer.addEventListener("click", () => activateAccountType("marketer"));

      // تسجيل جديد
      registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (!fullName || !email) {
          showNotification("الرجاء ملء الحقول الإلزامية.", "warning");
          return;
        }
        if (password.length < 8) {
          showNotification("كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل.", "error");
          return;
        }
        if (password !== confirmPassword) {
          showNotification("كلمتا المرور غير متطابقتين.", "error");
          return;
        }
        const role = userTypeInput.value === "trader" ? "تاجر" : "مسوق";
        try {
          const cred = await createUserWithEmailAndPassword(auth, email, password);
          const uid = cred.user.uid;
          const userRef = doc(db, "users", uid);
          await setDoc(
            userRef,
            {
              name: fullName,
              email,
              role,
              adsCount: 0,
              interactionsCount: 0,
              status: "نشط",
              createdAt: serverTimestamp(),
            },
            { merge: true }
          );
          confirmationEmail.textContent = email;
          registrationForm.classList.add("hidden");
          registrationConfirmation.classList.remove("hidden");
          showNotification("تم إنشاء الحساب وتفعيله بنجاح.", "success");
        } catch (err) {
          console.error(err);
          let msg = "تعذر إنشاء الحساب.";
          if (err.code === "auth/email-already-in-use") msg = "يوجد حساب مسجل بهذا البريد الإلكتروني.";
          showNotification(msg, "error");
        }
      });

      cancelRegistration.addEventListener("click", () => {
        registrationForm.classList.add("hidden");
        registrationConfirmation.classList.add("hidden");
      });

      goToLogin.addEventListener("click", () => {
        if (!currentUser) {
          switchView("register");
          return;
        }
        switchView("account");
      });

      resendActivation.addEventListener("click", () => {
        showNotification("يمكنك تعديل بياناتك لاحقًا من صفحة حسابي.", "info");
      });

      // تسجيل الدخول
      if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          const email = loginEmail.value.trim();
          const password = loginPassword.value;
          loginError.classList.add("hidden");
          loginError.textContent = "";
          if (!email || !password) {
            loginError.textContent = "الرجاء إدخال البريد الإلكتروني وكلمة المرور.";
            loginError.classList.remove("hidden");
            return;
          }
          showLoader();
          try {
            await signInWithEmailAndPassword(auth, email, password);
            showNotification("تم تسجيل الدخول بنجاح.", "success");
            switchView("account");
          } catch (err) {
            console.error(err);
            let msg = "بيانات تسجيل الدخول غير صحيحة.";
            if (err.code === "auth/user-not-found") msg = "لا يوجد حساب بهذا البريد.";
            if (err.code === "auth/wrong-password") msg = "كلمة المرور غير صحيحة.";
            loginError.textContent = msg;
            loginError.classList.remove("hidden");
          } finally {
            hideLoader();
          }
        });
      }

      // تسجيل الخروج
      if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
          try {
            await signOut(auth);
            showNotification("تم تسجيل الخروج من الحساب.", "success");
            switchView("home");
          } catch (err) {
            console.error(err);
            showNotification("تعذر تسجيل الخروج.", "error");
          }
        });
      }

      // إضافة إعلان جديد
      addAdBtn.addEventListener("click", async () => {
        if (!currentUser || !currentUserProfile) {
          showNotification("يجب تسجيل الدخول أو التسجيل أولاً قبل إضافة إعلان جديد.", "warning");
          switchView("register");
          return;
        }
        if (currentUserProfile.role !== "تاجر" && currentUserProfile.role !== "مسوق") {
          showNotification("إضافة الإعلانات متاحة فقط للتجار والمسوقين.", "warning");
          return;
        }
        const title = adTitleInput.value.trim();
        const desc = adDescriptionInput.value.trim();
        const price = Number(adPriceInput.value);
        let advertiserName = advertiserNameInput.value.trim();
        const type = adTypeInput.value || "أخرى";
        if (!title || !desc || !price) {
          showNotification("الرجاء إدخال عنوان ووصف ومبلغ للإعلان.", "warning");
          return;
        }
        if (!advertiserName) advertiserName = currentUserProfile.name;
        try {
          await addDoc(collection(db, "ads"), {
            title,
            description: desc,
            price,
            advertiserName,
            type,
            // نحتفظ بالحقلين معًا ليتوافقا مع أي قواعد تستخدم ownerUid أو userId
            ownerUid: currentUser.uid,
            userId: currentUser.uid,
            ownerEmail: currentUserProfile.email,
            ownerName: currentUserProfile.name,
            ownerRole: currentUserProfile.role,
            createdAt: serverTimestamp(),
          });
          adTitleInput.value = "";
          adDescriptionInput.value = "";
          adPriceInput.value = "";
          advertiserNameInput.value = "";
          adTypeInput.value = "تسويق";
          await Promise.all([renderAds(), renderAccount(), renderAdminData()]);
          showNotification("تم نشر الإعلان بنجاح.", "success");
        } catch (err) {
          console.error(err);
          const msg = err && err.code ? `تعذر نشر الإعلان. (الرمز: ${err.code})` : "تعذر نشر الإعلان.";
          showNotification(msg, "error");
        }
      });

      refreshInteractions.addEventListener("click", () => {
        renderAdminData();
        showNotification("تم تحديث قائمة التفاعلات.", "success");
      });

      createAdFromAccount.addEventListener("click", () => {
        switchView("user");
        window.scrollTo({ top: userView.offsetTop - 70, behavior: "smooth" });
      });

      closePaymentModal.addEventListener("click", () => closeModal(paymentModal));
      cancelPayment.addEventListener("click", () => closeModal(paymentModal));

      confirmPayment.addEventListener("click", async () => {
        if (!currentUser || !currentUserProfile) {
          showNotification("يجب تسجيل الدخول قبل إتمام عملية الدفع.", "warning");
          closeModal(paymentModal);
          switchView("register");
          return;
        }
        const title = paymentAdTitle.textContent;
        const proof = paymentProof.value.trim();
        if (!proof) {
          showNotification("الرجاء إدخال رقم عملية الدفع كإثبات.", "warning");
          return;
        }
        try {
          await addDoc(collection(db, "interactions"), {
            userUid: currentUser.uid,
            userName: currentUserProfile.name,
            userEmail: currentUserProfile.email,
            adTitle: title,
            type: "دفع عبر Baridimob",
            status: "قيد المراجعة",
            proof,
            createdAt: serverTimestamp(),
          });
          await Promise.all([renderAdminData(), renderAccount()]);
          showNotification("تم تسجيل عملية الدفع وإرسال الإثبات للمدير للمراجعة.", "success");
          closeModal(paymentModal);
          try {
            window.open("https://www.baridimob.ma", "_blank");
          } catch (e) {}
        } catch (err) {
          console.error(err);
          showNotification("تعذر تسجيل عملية الدفع.", "error");
        }
      });

      closeContactModal.addEventListener("click", () => closeModal(contactModal));
      closeContact.addEventListener("click", () => closeModal(contactModal));

      [paymentModal, contactModal].forEach((modal) => {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) closeModal(modal);
        });
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      const savedLang = localStorage.getItem("lang") || "ar";
      setLanguage(savedLang);
      setupEventListeners();
      // سيتم استدعاء renderAds/renderAccount/renderAdminData بعد تحميل ملف المستخدم من onAuthStateChanged
      renderAds().catch((e) => console.error(e));
    });
  </script>
</body>
</html>
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
