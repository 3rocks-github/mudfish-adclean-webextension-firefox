
function mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//ad.search.nate.com/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_00b58b87b31b44db90f7ff5a1386ad96();
  });
}
