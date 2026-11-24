/* ============================================================
   交互脚本（导航折叠 / 站内搜索）
   ------------------------------------------------------------
   三段互不依赖，哪段出问题都不影响另外两段。
   ============================================================ */

/* ---------- 1. 左栏展开 / 收起 ---------- */
(function () {
  var body = document.body;
  var btn = document.getElementById("railToggle");
  var rail = document.getElementById("rail");
  var mq = window.matchMedia("(max-width:1024px)");
  if (!btn || !rail) return;

  function setExpanded(on) {
    body.classList.toggle("is-expanded", on);
    btn.setAttribute("aria-expanded", on ? "true" : "false");
    btn.setAttribute("aria-label", on ? "收起导航" : "展开导航");
  }
  setExpanded(!mq.matches);

  btn.addEventListener("click", function () {
    setExpanded(!body.classList.contains("is-expanded"));
  });

  var barBtn = document.getElementById("menuBtn");
  if (barBtn) {
    barBtn.addEventListener("click", function () {
      setExpanded(!body.classList.contains("is-expanded"));
    });
  }

  /* 窄屏点导航后自动收起 */
  rail.addEventListener("click", function (e) {
    if (mq.matches && e.target.closest("a")) setExpanded(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mq.matches) setExpanded(false);
  });
  mq.addEventListener("change", function (e) {
    setExpanded(!e.matches);
  });
})();

/* ---------- 2. 站内搜索：按文字实时过滤卡片和胶囊 ---------- */
(function () {
  var q = document.getElementById("q");
  if (!q) return;

  var items = [].slice.call(document.querySelectorAll(".card, .chip"));
  var sections = [].slice.call(document.querySelectorAll("section[data-filter]"));
  var empty = document.getElementById("empty");

  function run() {
    var kw = q.value.trim().toLowerCase();
    var shown = 0;

    items.forEach(function (el) {
      var hit = !kw || el.textContent.toLowerCase().indexOf(kw) !== -1;
      el.classList.toggle("hide", !hit);
      if (hit) shown++;
    });

    /* 整节都没命中 → 连标题一起收起来 */
    sections.forEach(function (sec) {
      var vis = sec.querySelectorAll(".card:not(.hide), .chip:not(.hide)").length;
      sec.classList.toggle("hide", !!kw && vis === 0);
    });

    if (empty) empty.style.display = kw && shown === 0 ? "block" : "none";
  }

  q.addEventListener("input", run);
})();
