
function mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#navigation-cnt > div[class][style]:has(~ div[style*="margin-bottom:"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2a7f3890f454ac3889cf58cf146bd8b0();
  });
}
