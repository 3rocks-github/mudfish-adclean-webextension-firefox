
function mudfish_adclean_dc53fe1de3f9f7d42094b3eeb1711945() {
  try {
    Sizzle(`div[class*="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dc53fe1de3f9f7d42094b3eeb1711945 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dc53fe1de3f9f7d42094b3eeb1711945, function (items) {
  if (mudfish_adclean_g_conf_dc53fe1de3f9f7d42094b3eeb1711945.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dc53fe1de3f9f7d42094b3eeb1711945();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
