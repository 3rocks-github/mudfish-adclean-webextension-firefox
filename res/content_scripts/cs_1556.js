
function mudfish_adclean_e7c8cd1fcf00df5675801fed3eb96e3f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.brand_search`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e7c8cd1fcf00df5675801fed3eb96e3f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e7c8cd1fcf00df5675801fed3eb96e3f();
  });
}
