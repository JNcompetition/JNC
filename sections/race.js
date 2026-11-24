/* 竞赛入口 · 结构（标题 + 三列卡片）
   想改这个板块的排版，只改这里；内容在 data/race.js */
(function () {
  var host = document.getElementById("raceMount");
  if (!host) return;
  host.outerHTML =
    '<section id="race" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>竞赛入口</h2></div>' +
        '<div class="grid g3" data-module="race"></div>' +
      '</div>' +
    '</section>';
})();
