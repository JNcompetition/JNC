/* ============================================================
   通用渲染：把 SITE_DATA 里的数组渲染成卡片
   ------------------------------------------------------------
   页面上任何一个 <div class="grid" data-module="键名"></div>
   都会被自动填充成卡片。以后别的模块也能这么拆。
   不需要改这个文件，除非要改卡片长什么样。
   ============================================================ */
(function () {
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var data = window.SITE_DATA || {};

  document.querySelectorAll("[data-module]").forEach(function (grid) {
    var key = grid.getAttribute("data-module");
    var list = data[key];

    if (!list || !list.length) {
      grid.innerHTML = '<p style="color:#7A7266;font-size:13.5px">暂无内容</p>';
      return;
    }

    grid.innerHTML = list.map(function (it) {
      var tag = it.tag
        ? '<span class="tag' + (it.hot ? " hot" : "") + '">' + esc(it.tag) + "</span>"
        : "";
      return (
        '<a class="card" href="' + esc(it.url) + '" target="_blank" rel="noopener nofollow">' +
          tag +
          '<div class="ico">' + esc(it.icon || "🔗") + "</div>" +
          "<h3>" + esc(it.title) + "</h3>" +
          (it.desc ? "<p>" + esc(it.desc) + "</p>" : "") +
          '<div class="go">' + esc(it.go || "进入官网") + "</div>" +
        "</a>"
      );
    }).join("");

    // 标题右边的「更新于 …」
    var stamp = document.getElementById(key + "Updated");
    if (stamp && data[key + "Updated"]) {
      stamp.textContent = "更新于 " + data[key + "Updated"];
    }
  });
})();
