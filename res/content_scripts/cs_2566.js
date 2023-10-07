
function mudfish_adclean_d6902455d82cbf5f8cd042f9aa9aa494() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section > div[class*=" "]:has(ins.adsbygoogle, a[href][target="_blank"][referrerpolicy="unsafe-url"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d6902455d82cbf5f8cd042f9aa9aa494();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d6902455d82cbf5f8cd042f9aa9aa494();
  });
}
