
function mudfish_adclean_b498c159b1a9fce49f06671b5444a84b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`li[data-nvmid]._ad`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b498c159b1a9fce49f06671b5444a84b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b498c159b1a9fce49f06671b5444a84b();
  });
}
