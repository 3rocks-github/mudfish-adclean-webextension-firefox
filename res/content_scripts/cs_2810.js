
function mudfish_adclean_6a30f37bef778c6929f1deec10d3a200() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="banner-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6a30f37bef778c6929f1deec10d3a200();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6a30f37bef778c6929f1deec10d3a200();
  });
}
