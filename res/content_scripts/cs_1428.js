
function mudfish_adclean_3642649de21182dc2d341f20569d9818() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class^="banner-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3642649de21182dc2d341f20569d9818();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3642649de21182dc2d341f20569d9818();
  });
}
