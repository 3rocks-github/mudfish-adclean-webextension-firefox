
function mudfish_adclean_a4ecc6944b08ec30163d0fb9cee9bc97() {
  try {
    Sizzle(`.waiting_coupang_wrap`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a4ecc6944b08ec30163d0fb9cee9bc97 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a4ecc6944b08ec30163d0fb9cee9bc97, function (items) {
  if (mudfish_adclean_g_conf_a4ecc6944b08ec30163d0fb9cee9bc97.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a4ecc6944b08ec30163d0fb9cee9bc97();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a4ecc6944b08ec30163d0fb9cee9bc97();
    });
  }
});
