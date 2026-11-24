/* 益智游戏 · 结构（四列卡片 + 一行胶囊）
   内容在 data/game.js */
(function () {
  var host = document.getElementById("gameMount");
  if (!host) return;
  host.outerHTML =
    '<section id="game" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>益智游戏</h2></div>' +
        '<div class="grid g4" data-module="game"></div>' +
        '<div class="chips" data-module="gameChips"></div>' +
      '</div>' +
    '</section>';
})();
