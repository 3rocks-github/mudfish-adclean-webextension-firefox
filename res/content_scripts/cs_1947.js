
function mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[id^="aside_"] > div[id$="-sticky-wrap"] > div[id$="-sticky"] > div[id^="w_read_"][class^="boxshow_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2edde6062e7933ba507b51a9c7f607d1();
  });
}
