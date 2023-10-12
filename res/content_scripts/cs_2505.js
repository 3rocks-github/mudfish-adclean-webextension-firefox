
function mudfish_adclean_027234e0590cfa0dee23e7a64e67bdcc() {
  try {
    Sizzle(`body.nate article#mArticle [disp-attr].g_comp:has(iframe[src*="//ad.search.nate.com/"]) + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_027234e0590cfa0dee23e7a64e67bdcc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_027234e0590cfa0dee23e7a64e67bdcc, function (items) {
  if (mudfish_adclean_g_conf_027234e0590cfa0dee23e7a64e67bdcc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_027234e0590cfa0dee23e7a64e67bdcc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
