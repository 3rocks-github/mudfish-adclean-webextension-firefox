
function mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.entry-content > div[id^="top"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f7ed8fe431a28b02a86bf5b6132630ec();
  });
}
