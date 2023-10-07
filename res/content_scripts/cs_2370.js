
function mudfish_adclean_566185f3cdcc56c1264a363e1853aef1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.goods_list_tit`).forEach(element => {
        element.style.paddingTop = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_566185f3cdcc56c1264a363e1853aef1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_566185f3cdcc56c1264a363e1853aef1();
  });
}
