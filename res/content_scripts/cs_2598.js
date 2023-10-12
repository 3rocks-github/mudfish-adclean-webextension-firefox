
function mudfish_adclean_e1a03cc35c3e0a1cdaa3713871e6377c() {
  try {
    Sizzle(`div[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e1a03cc35c3e0a1cdaa3713871e6377c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e1a03cc35c3e0a1cdaa3713871e6377c, function (items) {
  if (mudfish_adclean_g_conf_e1a03cc35c3e0a1cdaa3713871e6377c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e1a03cc35c3e0a1cdaa3713871e6377c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
