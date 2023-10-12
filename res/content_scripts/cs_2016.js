
function mudfish_adclean_3eb4857a877759693d75d4c55faa12e9() {
  try {
    Sizzle(`.plp-default__item.search-product__cmg-badge`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3eb4857a877759693d75d4c55faa12e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3eb4857a877759693d75d4c55faa12e9, function (items) {
  if (mudfish_adclean_g_conf_3eb4857a877759693d75d4c55faa12e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3eb4857a877759693d75d4c55faa12e9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
