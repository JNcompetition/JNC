/* 丘班测评通道 · 结构（三列）
   内容在 data/paper.js */
(function () {
  var host = document.getElementById("paperMount");
  if (!host) return;
  host.outerHTML =
    '<section id="paper" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>丘班测评通道</h2></div>' +
        '<div class="grid g3" data-module="paper"></div>' +
      '</div>' +
    '</section>';
})();
