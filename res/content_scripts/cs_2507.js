
function mudfish_adclean_1bb5867a9403aa63c635b3b66aee3efb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article#mArticle [disp-attr].g_comp:has(.adLinkColl) + .line`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1bb5867a9403aa63c635b3b66aee3efb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1bb5867a9403aa63c635b3b66aee3efb();
  });
}
