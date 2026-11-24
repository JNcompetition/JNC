/* 数学工具 · 结构（三列卡片 + 一行胶囊）
   内容在 data/tool.js */
(function () {
  var host = document.getElementById("toolMount");
  if (!host) return;
  host.outerHTML =
    '<section id="tool" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>数学工具</h2></div>' +
        '<div class="grid g3" data-module="tool"></div>' +
        '<div class="chips" data-module="toolChips"></div>' +
      '</div>' +
    '</section>';
})();
