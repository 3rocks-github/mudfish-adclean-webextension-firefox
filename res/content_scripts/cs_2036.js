
function mudfish_adclean_057cd75f53a4f6153e9d1075a5ea24cc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul[id="info.search.place.list"] > li.AdItem`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_057cd75f53a4f6153e9d1075a5ea24cc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_057cd75f53a4f6153e9d1075a5ea24cc();
  });
}
