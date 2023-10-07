
function mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.widget-side-box > div[class^="main-box main-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4dc49f0da505862902b72dc4aa1de13c();
  });
}
