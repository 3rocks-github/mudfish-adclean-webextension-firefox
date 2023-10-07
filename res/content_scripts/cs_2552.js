
function mudfish_adclean_a5ab5722b715f6284bd7f8f0e3d04e32() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article[data-list-container="searchList"] li:has(span:contains(AD).gray_round_badge)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a5ab5722b715f6284bd7f8f0e3d04e32();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a5ab5722b715f6284bd7f8f0e3d04e32();
  });
}
