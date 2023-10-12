
function mudfish_adclean_e1d192af8c729c1add60064f176286e4() {
  try {
    Sizzle(`#googleAd`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e1d192af8c729c1add60064f176286e4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e1d192af8c729c1add60064f176286e4, function (items) {
  if (mudfish_adclean_g_conf_e1d192af8c729c1add60064f176286e4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e1d192af8c729c1add60064f176286e4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
