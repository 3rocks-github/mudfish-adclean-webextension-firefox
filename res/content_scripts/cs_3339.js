
function mudfish_adclean_2014bbafdf502cec0ca4f843b09e2d23() {
  try {
    Sizzle(`.bodyHide`).forEach(element => {
      element.style.height = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2014bbafdf502cec0ca4f843b09e2d23 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2014bbafdf502cec0ca4f843b09e2d23, function (items) {
  if (mudfish_adclean_g_conf_2014bbafdf502cec0ca4f843b09e2d23.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2014bbafdf502cec0ca4f843b09e2d23();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2014bbafdf502cec0ca4f843b09e2d23();
    });
  }
});
