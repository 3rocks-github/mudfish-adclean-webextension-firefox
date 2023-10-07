
function mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contents > div[id^="bnrLink"].ma_visual_area.bnrContents ~ div:not(.smthp_infom):not(#productSrchListArea)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f370a0d367cf4b26ddd1991211eb7137();
  });
}
