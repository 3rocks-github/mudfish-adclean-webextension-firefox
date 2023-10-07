
function mudfish_adclean_9bd94e941c8c1f717ae58f962214acef() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="ad"][id$="ad"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9bd94e941c8c1f717ae58f962214acef();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9bd94e941c8c1f717ae58f962214acef();
  });
}
