
function mudfish_adclean_95d66ba007262fc6dae30f50929832af() {
  try {
    Sizzle(`.m-row > div[class^="col col-"]:not(:has(> .col__inner a:not([href*="ad-api.enuri.info"]))):has(.bnrbox ul[id][class^="bnr__"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_95d66ba007262fc6dae30f50929832af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_95d66ba007262fc6dae30f50929832af, function (items) {
  if (mudfish_adclean_g_conf_95d66ba007262fc6dae30f50929832af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_95d66ba007262fc6dae30f50929832af();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
