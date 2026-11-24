/* 杯赛真题 · 结构（一行胶囊）
   内容在 data/test.js */
(function () {
  var host = document.getElementById("testMount");
  if (!host) return;
  host.outerHTML =
    '<section id="test" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>杯赛真题</h2></div>' +
        '<div class="chips" style="margin-top:0" data-module="testChips"></div>' +
      '</div>' +
    '</section>';
})();
