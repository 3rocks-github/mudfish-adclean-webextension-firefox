
function mudfish_adclean_12f036c52300b08f53fe368d497731e8() {
  try {
    Sizzle(`.right > .board-preview.board-ppomppu`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_12f036c52300b08f53fe368d497731e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_12f036c52300b08f53fe368d497731e8, function (items) {
  if (mudfish_adclean_g_conf_12f036c52300b08f53fe368d497731e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_12f036c52300b08f53fe368d497731e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
