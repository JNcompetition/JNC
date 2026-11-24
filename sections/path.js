/* 升学通道 · 结构（两列：前两张是 big 大卡）
   内容在 data/path.js */
(function () {
  var host = document.getElementById("pathMount");
  if (!host) return;
  host.outerHTML =
    '<section id="path" data-filter>' +
      '<div class="wrap">' +
        '<div class="sec-head"><h2>升学通道</h2></div>' +
        '<div class="grid g2" data-module="path"></div>' +
      '</div>' +
    '</section>';
})();
