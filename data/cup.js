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
/*window.SITE_DATA.cupUpdated = "2026-11-20";*/

window.SITE_DATA.cup = [
    {
    icon: "🏅",
    tag: "1–9 年级",
    hot: true,
    title: "金诺杯",
    desc: "以赛促学，以赛定级 考试时间2026 年 12 月 18 日（周五）17:00–18:30",
    url: "https://mp.weixin.qq.com/s/Ohn5u35Ap0goUHBIg_-NZA",
    go: "查看通知"
  },
  {
    icon: "🌏",
    tag: "官方入口",
    hot: false,
    title: "阿思丹 ASDAN",
    desc: "袋鼠、AMC8/10/12、澳洲 AMC、SASMO 等国际赛的中国区信息",
    url: "https://www.seedasdan.asia/",
    go: "进入官网"
  },
  {
    icon: "🏅",
    tag: "8年级及以下",
    hot: true,
    title: "AMC 8",
    desc: "8年级及以下均可参与；中国区走 ASDAN 考点报名  1.12报名截止  1.22考试",
    url: "https://www.seedasdan.asia/amc8/",
    go: "进入官网"
  },
   {
    icon: "🦘",
    tag: "1–12 年级",
    hot: true,
    title: "袋鼠数学 Math Kangaroo",
    desc: "低龄最友好，分 6 个等级；中国区走 ASDAN 考点报名 11.24报名截止 12.4/12.5考试",
    url: "https://www.seedasdan.asia/mkchina/",
    go: "进入官网"
  },
 
];
