
function mudfish_adclean_896d74f5d0b2770dc538508518499ae8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width="1200"]:has(> tbody > tr > td > div[class*="slider-banner-"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_896d74f5d0b2770dc538508518499ae8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_896d74f5d0b2770dc538508518499ae8();
  });
}
