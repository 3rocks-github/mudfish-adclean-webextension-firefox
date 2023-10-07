
function mudfish_adclean_c2cbd2b2c1d05af4df46ca3b5a579181() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[id^="ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c2cbd2b2c1d05af4df46ca3b5a579181();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c2cbd2b2c1d05af4df46ca3b5a579181();
  });
}
