
function mudfish_adclean_ad59d114a1f1ba5090e48062d15024ef() {
  try {
    Sizzle(`div[id^="right_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ad59d114a1f1ba5090e48062d15024ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ad59d114a1f1ba5090e48062d15024ef, function (items) {
  if (mudfish_adclean_g_conf_ad59d114a1f1ba5090e48062d15024ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ad59d114a1f1ba5090e48062d15024ef();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
