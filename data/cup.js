/* ============================================================
   杯赛模块 · 数据文件
   ------------------------------------------------------------
   以后要加赛事、改文案、换链接，**只改这个文件**，页面会自动重排。
   不用碰 index.html。

   每一项的字段：
     icon   封面 emoji（随便换）
     tag    右上角角标，留空字符串 "" 就不显示
     hot    角标是否用橙色（true=重点，false=普通，默认 false）
     title  标题（必填）
     desc   一句话说明
     url    点卡片跳去的网址（必填）
     go     卡片底部小字，默认「进入官网」

   加一项 = 复制一个 { ... }, 粘在上一项后面（注意上一项末尾要有逗号）
   删一项 = 整段删掉，同时删掉它前面那项的逗号
   ============================================================ */
window.SITE_DATA = window.SITE_DATA || {};

/* 数据更新时间，会显示在「杯赛」标题右边；每次改完记得改这里 */
window.SITE_DATA.cupUpdated = "2026-11-20";

window.SITE_DATA.cup = [
  {
    icon: "🌏",
    tag: "官方入口",
    hot: false,
    title: "阿思丹 ASDAN",
    desc: "袋鼠、AMC8、澳洲 AMC、SASMO 等国际赛的中国区信息",
    url: "https://www.seedasdan.asia/",
    go: "进入官网"
  },
   {
    icon: "🦘",
    tag: "1–12 年级",
    hot: true,
    title: "袋鼠数学 Math Kangaroo",
    desc: "低龄最友好，分 6 个等级；中国区走 ASDAN 考点报名",
    url: "https://www.seedasdan.asia/mkchina/",
    go: "进入官网"
  },
  {
    icon: "🏆",
    tag: "",
    hot: false,
    title: "华数之星（原华杯赛）",
    desc: "数学竞赛赛事入口",
    url: "https://www.huashuzhixing.cn/",
    go: "进入官网"
  },
  {
    icon: "🔬",
    tag: "",
    hot: false,
    title: "青少年科技创新大赛",
    desc: "青少年科技创新赛事入口",
    url: "https://castic.cyscc.org/",
    go: "进入官网"
  }
];
