
function mudfish_adclean_1bb5867a9403aa63c635b3b66aee3efb() {
  try {
    Sizzle(`article#mArticle [disp-attr].g_comp:has(.adLinkColl) + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1bb5867a9403aa63c635b3b66aee3efb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1bb5867a9403aa63c635b3b66aee3efb, function (items) {
  if (mudfish_adclean_g_conf_1bb5867a9403aa63c635b3b66aee3efb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1bb5867a9403aa63c635b3b66aee3efb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
