
function mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src^="/mainhover/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_58e00a2f30d4ecdf4391bde16ab8396a();
  });
}
