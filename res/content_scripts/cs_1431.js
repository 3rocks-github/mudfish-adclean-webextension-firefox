
function mudfish_adclean_14a0212aa0c9be8872ec765134532f05() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main > div[style*=" "].section`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_14a0212aa0c9be8872ec765134532f05();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_14a0212aa0c9be8872ec765134532f05();
  });
}
