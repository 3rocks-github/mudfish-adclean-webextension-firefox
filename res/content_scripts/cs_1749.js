
function mudfish_adclean_e60abb7d8a111d5b09e461384cb9fdc4() {
  try {
    Sizzle(`.HAdLine`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e60abb7d8a111d5b09e461384cb9fdc4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e60abb7d8a111d5b09e461384cb9fdc4, function (items) {
  if (mudfish_adclean_g_conf_e60abb7d8a111d5b09e461384cb9fdc4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e60abb7d8a111d5b09e461384cb9fdc4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
