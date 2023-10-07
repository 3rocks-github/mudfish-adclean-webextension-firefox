
function mudfish_adclean_4e290fc7a51bf1410c1823d24898c877() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container.atcpage div[style]:not([class]):not([id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4e290fc7a51bf1410c1823d24898c877();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4e290fc7a51bf1410c1823d24898c877();
  });
}
