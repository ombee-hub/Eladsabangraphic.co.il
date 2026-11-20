/* ===== Elad Saban — site behaviour ===== */
(function () {
  "use strict";

  /* --- Mobile side-drawer navigation (all pages) --- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  var overlay = document.getElementById("navOverlay");
  var closeBtn = document.getElementById("drawerClose");
  function openDrawer() {
    links.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.classList.add("nav-open");
  }
  function closeDrawer() {
    links.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.contains("open") ? closeDrawer() : openDrawer();
    });
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });
    var dd = links.querySelector(".nav-dd");
    var ddToggle = links.querySelector(".nav-dd-toggle");
    if (dd && ddToggle) {
      ddToggle.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width:860px)").matches) {
          e.preventDefault();
          dd.classList.toggle("open");
        }
      });
    }
  }

  /* --- Projects gallery filter (projects.html) --- */
  var filters = document.getElementById("filters");
  var grid = document.getElementById("projectGrid");
  if (filters && grid) {
    var chips = filters.querySelectorAll(".chip");
    var cards = grid.querySelectorAll(".card-proj");
    filters.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      chips.forEach(function (c) { c.classList.remove("on"); });
      chip.classList.add("on");
      var f = chip.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-cat") === f;
        card.style.display = show ? "" : "none";
      });
    });
  }

  /* --- Project case-study data --- */
  var BRAND_PALETTE = ["#ed1c24", "#0088cb", "#ffcb05", "#0d0d0d"];

  var ORDER = ["maccabi-netanya", "hapoel-haifa", "special-olympics", "kiryat-ata", "hockey-herzliya", "bowling-milky-way", "icon-israel", "rakefet"];

  var PROJECTS = {
    "maccabi-netanya": {
      name: "מכבי נתניה", field: "כדורגל · ליגת העל",
      tags: ["כדורגל", "ליגת העל", "מיתוג ודיגיטל"], role: "מעצב גרפי", deliver: "מיתוג · רשתות · באנרים",
      desc: "מכבי נתניה הוא אחד ממועדוני הכדורגל המובילים בליגת העל. ליוויתי את המועדון בעיצוב גרפי ובבניית נוכחות דיגיטלית עקבית — מתבניות לימי משחק ועד קמפיינים לרשתות החברתיות, תוך נאמנות לזהות הצהוב־שחור ההיסטורית של המועדון.",
      palette: ["#ffd200", "#111111", "#ffffff", "#8a8a8a"]
    },
    "hapoel-haifa": {
      name: "הפועל חיפה", field: "כדורסל",
      tags: ["כדורסל", "מיתוג", "דיגיטל"], role: "מעצב גרפי · משנת 2023", deliver: "חומרי משחק · רשתות",
      desc: "בשנת 2023 מוניתי למעצב הגרפי של אגודת הכדורסל הפועל חיפה. אני אחראי על עיצוב חומרי המשחק, הקמפיינים והנוכחות הדיגיטלית של הקבוצה, בשפה חדה ואנרגטית.",
      palette: ["#e1241e", "#111111", "#ffffff", "#8a8a8a"]
    },
    "special-olympics": {
      name: "ספיישל אולימפיקס ישראל", field: "ארגון ספורט",
      tags: ["ארגון ספורט", "הכלה", "מיתוג"], role: "מעצב גרפי ונציג ספורטאים", deliver: "מיתוג · ייצוג · רשתות",
      desc: "ספיישל אולימפיקס ישראל הוא ארגון ספורט בינלאומי לאנשים עם מוגבלות שכלית. אני משמש בו כמעצב הגרפי וגם כנציג הספורטאים וחבר ועדה — שילוב שמביא לכל עיצוב הבנה עמוקה של ערכי ההכלה, הגאווה והשייכות.",
      palette: ["#e2231a", "#ffffff", "#0d0d0d", "#8a8a8a"]
    },
    "kiryat-ata": {
      name: "מכבי עירוני קריית אתא", field: "כדורגל נוער",
      tags: ["כדורגל נוער", "מיתוג"], role: "מעצב גרפי", deliver: "מיתוג · רשתות",
      desc: "ליווי גרפי למחלקת הנוער בכדורגל של מכבי עירוני קריית אתא — שפה חזותית צעירה ואנרגטית שמלווה את השחקנים הצעירים לאורך העונה.",
      palette: ["#1a3a8f", "#ffcb05", "#ffffff", "#8a8a8a"]
    },
    "hockey-herzliya": {
      name: "מועדון הוקי הרצליה", field: "הוקי רצפה",
      tags: ["הוקי", "קהילה", "מיתוג"], role: "מעצב גרפי", deliver: "לוגו · מיתוג",
      desc: "מועדון הוקי הרצליה (א. קורן) מפעיל קבוצת הוקי רצפה ל-18 ספורטאים עם צרכים מיוחדים. עיצבתי עבורו זהות גאה ומכילה שמשקפת את רוח הקבוצה ואת תחושת השייכות.",
      palette: ["#f08020", "#111111", "#ffffff", "#8a8a8a"]
    },
    "bowling-milky-way": {
      name: "שביל הכוכבים", field: "באולינג",
      tags: ["באולינג", "קהילה"], role: "מעצב גרפי", deliver: "לוגו · מיתוג",
      desc: "קבוצת הבאולינג ׳שביל הכוכבים׳ מהרצליה מאגדת מעל 60 ספורטאים עם צרכים מיוחדים. המיתוג נבנה סביב תחושת קהילה, שייכות וכיף — צבעוני, חברותי ובלתי נשכח.",
      palette: ["#1c8ac9", "#7ec24a", "#f5902a", "#ffffff"]
    },
    "icon-israel": {
      name: "אייקון ישראל", field: "מדיה",
      tags: ["מדיה", "דיגיטל"], role: "מעצב גרפי · משנת 2023", deliver: "עיצוב תוכן · רשתות",
      desc: "בשנת 2023 מוניתי לתפקיד בחברת המדיה אייקון ישראל, שם אני אחראי על עיצוב גרפי ותוכן ויזואלי שוטף לרשתות החברתיות.",
      palette: ["#7a3b9e", "#e8b53a", "#ffffff", "#0d0d0d"]
    },
    "rakefet": {
      name: "מועדון חברתי רקפת", field: "מועדון קהילתי",
      tags: ["קהילה", "מיתוג"], role: "מעצב גרפי", deliver: "לוגו · מיתוג",
      desc: "מועדון חברתי ׳רקפת׳ מיועד לבוגרים בני 21 ומעלה עם צרכים מיוחדים. עיצבתי מותג חם ונגיש שמזמין את חברי הקהילה להרגיש בבית.",
      palette: ["#2aa7a0", "#3f6fb5", "#ffffff", "#0d0d0d"]
    }
  };

  /* --- Render a single project (project.html) --- */
  var hero = document.getElementById("pHero");
  if (hero) {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("slug");
    if (!PROJECTS[slug]) slug = ORDER[0];
    var p = PROJECTS[slug];

    function setText(id, txt) { var el = document.getElementById(id); if (el) el.textContent = txt; }

    document.title = p.name + " | אלעד סבן — עיצוב גרפי";
    setText("crumbName", p.name);
    setText("pTitle", p.name);
    setText("pDesc", p.desc);
    setText("mClient", p.name);
    setText("mField", p.field);
    setText("mRole", p.role);
    setText("mDeliver", p.deliver);

    hero.innerHTML = '<img class="detail-logo" src="images/' + slug + '.webp" alt="' + p.name + '">';

    var tagsBox = document.getElementById("pTags");
    p.tags.forEach(function (t) {
      var s = document.createElement("span");
      s.className = "tag"; s.textContent = t; tagsBox.appendChild(s);
    });

    var pal = document.getElementById("pPalette");
    (p.palette || BRAND_PALETTE).forEach(function (c) {
      var d = document.createElement("div");
      d.className = "swatch"; d.style.background = c; d.title = c; pal.appendChild(d);
    });

    var idx = ORDER.indexOf(slug);
    var nextSlug = ORDER[(idx + 1) % ORDER.length];
    var nextLink = document.getElementById("nextProj");
    if (nextLink) {
      nextLink.href = "project.html?slug=" + nextSlug;
      setText("nextName", PROJECTS[nextSlug].name);
    }
  }
})();

(function () {
  "use strict";
  var galleries = document.querySelectorAll(".proj-gallery");
  if (!galleries.length) return;
  var lb = document.createElement("div"); lb.className = "lightbox";
  var im = document.createElement("img"); lb.appendChild(im); document.body.appendChild(lb);
  galleries.forEach(function (g) {
    g.addEventListener("click", function (e) {
      var t = e.target.closest("img"); if (!t) return;
      im.src = t.src; lb.classList.add("open");
    });
  });
  lb.addEventListener("click", function () { lb.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });
})();

(function () {
  "use strict";
  var els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("in"); }); return; }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(function (el) { obs.observe(el); });
})();

(function () {
  "use strict";
  var cform = document.getElementById("contactForm");
  if (!cform) return;
  cform.addEventListener("submit", function (e) {
    e.preventDefault();
    function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; }
    var name = val("name");
    if (!name) { var n = document.getElementById("name"); if (n) n.focus(); return; }
    var fields = [["שם", name], ["ארגון/קבוצה", val("org")], ["טלפון", val("phone")], ["אימייל", val("email")], ["שירות", val("service")], ["תקציב", val("budget")], ["מועד", val("timeline")]];
    var lines = ["היי אלעד! הגעתי מהאתר ורציתי לפנות אליך:", ""];
    fields.forEach(function (p) { if (p[1]) lines.push(p[0] + ": " + p[1]); });
    var msg = val("msg");
    if (msg) { lines.push(""); lines.push(msg); }
    window.open("https://wa.me/972503291993?text=" + encodeURIComponent(lines.join("\n")), "_blank");
  });
})();
