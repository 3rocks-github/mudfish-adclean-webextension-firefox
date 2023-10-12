
function mudfish_adclean_1a63a3003f685afc23aa8788db981222() {
  try {
    Sizzle(`.mdsns_reply > div[style^="margin-bottom:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a63a3003f685afc23aa8788db981222 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a63a3003f685afc23aa8788db981222, function (items) {
  if (mudfish_adclean_g_conf_1a63a3003f685afc23aa8788db981222.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a63a3003f685afc23aa8788db981222();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
