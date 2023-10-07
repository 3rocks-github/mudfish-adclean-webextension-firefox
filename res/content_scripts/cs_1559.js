
function mudfish_adclean_4b6ddba9136d67856c0d69f385e2fc8c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[class*="ad_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4b6ddba9136d67856c0d69f385e2fc8c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4b6ddba9136d67856c0d69f385e2fc8c();
  });
}
