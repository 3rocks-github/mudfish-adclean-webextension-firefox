
function mudfish_adclean_533502c570c5c3073db7b8fc8c030d50() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section.search_deallist > .deallist_wrap > ul > li[class]:has(> a[href*="//display.admonseller.com/"].anchor)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_533502c570c5c3073db7b8fc8c030d50();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_533502c570c5c3073db7b8fc8c030d50();
  });
}
