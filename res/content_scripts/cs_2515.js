
function mudfish_adclean_4f1db8e5dc91b3bb72fe2f14dd583667() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside div[class][id] > div[id]:not([class]):not(:has(> *))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4f1db8e5dc91b3bb72fe2f14dd583667();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4f1db8e5dc91b3bb72fe2f14dd583667();
  });
}
