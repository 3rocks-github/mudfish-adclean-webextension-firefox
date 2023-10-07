
function mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#tfHeader > div[style]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_48c7518e2bd8cdeb94484b54df9b095c();
  });
}
