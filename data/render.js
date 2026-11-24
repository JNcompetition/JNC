/* ============================================================
   通用渲染：把 SITE_DATA 里的数组渲染成「卡片」或「胶囊」
   ------------------------------------------------------------
   用法：
     <div class="grid g3" data-module="race"></div>     → 卡片
     <div class="chips"    data-module="testChips"></div> → 胶囊
   卡片字段：icon / tag / hot / title / desc / url / go / big / official
   胶囊字段：title / url
   要改卡片长相，只改这个文件；要改内容，只改 data/*.js
   ============================================================ */
(function () {
  var data = window.SITE_DATA || {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function card(it) {
    var cls = "card" + (it.big ? " big" : "");
    var tag = it.tag
      ? '<span class="tag' + (it.hot ? " hot" : "") + '">' + esc(it.tag) + "</span>"
      : "";
    var off = it.official ? '<span class="official">官方</span>' : "";
    return (
      '<a class="' + cls + '" href="' + esc(it.url) + '" target="_blank" rel="noopener nofollow">' +
        tag +
        '<div class="ico">' + esc(it.icon || "🔗") + "</div>" +
        "<h3>" + esc(it.title) + off + "</h3>" +
        (it.desc ? "<p>" + esc(it.desc) + "</p>" : "") +
        '<div class="go">' + esc(it.go || "进入官网") + "</div>" +
      "</a>"
    );
  }

  function chip(it) {
    return (
      '<a class="chip" href="' + esc(it.url) + '" target="_blank" rel="noopener nofollow">' +
        esc(it.title) +
      "</a>"
    );
  }

  document.querySelectorAll("[data-module]").forEach(function (host) {
    var key = host.getAttribute("data-module");
    var list = data[key];

    if (!list || !list.length) {
      host.innerHTML = '<p style="color:#7A7266;font-size:13.5px">暂无内容</p>';
      return;
    }

    var isChips = host.classList.contains("chips") || host.getAttribute("data-kind") === "chips";
    host.innerHTML = list.map(isChips ? chip : card).join("");
  });
})();
