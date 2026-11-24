/* AI 助手 · 结构（三列卡片 + 一行胶囊）
   内容在 data/ai.js */
(function () {
  var host = document.getElementById("aiMount");
  if (!host) return;
  host.outerHTML =
    '<section id="ai" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>AI 助手</h2></div>' +
        '<div class="grid g3" data-module="ai"></div>' +
        '<div class="chips" data-module="aiChips"></div>' +
      '</div>' +
    '</section>';
})();
