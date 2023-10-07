
function mudfish_adclean_daad3dad3146c9097af23f8b7819631d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div:is([aria-label="Primary Sidebar"], #home-sidebar) > aside:has(img.image)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_daad3dad3146c9097af23f8b7819631d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_daad3dad3146c9097af23f8b7819631d();
  });
}
