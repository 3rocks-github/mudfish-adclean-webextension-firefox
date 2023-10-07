
function mudfish_adclean_be5f7ae6e6c864eff5ba4bfc6a43c8f4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[style]:not([style=" "]) a[href][target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_be5f7ae6e6c864eff5ba4bfc6a43c8f4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_be5f7ae6e6c864eff5ba4bfc6a43c8f4();
  });
}
