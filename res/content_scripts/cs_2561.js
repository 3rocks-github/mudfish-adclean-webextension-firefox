
function mudfish_adclean_51fd7c8f5a254958de64533df135e26d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article-list > .notice:has(.list-header:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_51fd7c8f5a254958de64533df135e26d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_51fd7c8f5a254958de64533df135e26d();
  });
}
