
function mudfish_adclean_e7c8cd1fcf00df5675801fed3eb96e3f() {
  try {
    Sizzle(`.brand_search`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e7c8cd1fcf00df5675801fed3eb96e3f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e7c8cd1fcf00df5675801fed3eb96e3f, function (items) {
  if (mudfish_adclean_g_conf_e7c8cd1fcf00df5675801fed3eb96e3f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e7c8cd1fcf00df5675801fed3eb96e3f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
