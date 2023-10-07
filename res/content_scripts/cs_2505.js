
function mudfish_adclean_027234e0590cfa0dee23e7a64e67bdcc() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body.nate article#mArticle [disp-attr].g_comp:has(iframe[src*="//ad.search.nate.com/"]) + .line`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_027234e0590cfa0dee23e7a64e67bdcc();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_027234e0590cfa0dee23e7a64e67bdcc();
  });
}
