
function mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.alert.alert-danger:has(> a:contains([AD]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_da0b54f05c4ba6950c1b79607e4cba8b();
  });
}
