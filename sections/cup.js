/* ============================================================
   杯赛模块 · 结构
   ------------------------------------------------------------
   这一整个「杯赛」区块（标题 + 网格）单独放在这里，
   index.html 里只有一个挂载点：<div id="cupMount"></div>

   想改版式（比如标题改成「赛事一览」、网格从三列改四列）→ 改这个文件
   想改内容（加赛事、换链接）        → 改 data/cup.js
   ============================================================ */
(function () {
  var host = document.getElementById("cupMount");
  if (!host) return;

  host.outerHTML = [
    '<section id="cup">',
    '  <div class="wrap">',
    '    <div class="sec-head">',
    '      <h2>近期杯赛</h2>',
    '      <span class="sub" id="cupUpdated"></span>',
    "    </div>",
    '    <div class="grid g3" data-module="cup"></div>',
    "  </div>",
    "</section>",
  ].join("");
})();
