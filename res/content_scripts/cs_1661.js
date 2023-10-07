
function mudfish_adclean_04e5849fbe5b711c435b7b0607b22772() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.container > div[style][id^="slider"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_04e5849fbe5b711c435b7b0607b22772();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_04e5849fbe5b711c435b7b0607b22772();
  });
}
