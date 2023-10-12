
function mudfish_adclean_a3588cff3e097bf48516853346c1b332() {
  try {
    Sizzle(`.grand_banner_wrap li.item_adagency`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a3588cff3e097bf48516853346c1b332 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a3588cff3e097bf48516853346c1b332, function (items) {
  if (mudfish_adclean_g_conf_a3588cff3e097bf48516853346c1b332.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a3588cff3e097bf48516853346c1b332();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
