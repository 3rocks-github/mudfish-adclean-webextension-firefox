
function mudfish_adclean_c6333c9b77e542061eff66c1cf134748() {
  try {
    Sizzle(`.article_view ~ div[style^="text-align:"].clean_banner ~ .wcms_banner + .h45`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6333c9b77e542061eff66c1cf134748 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6333c9b77e542061eff66c1cf134748, function (items) {
  if (mudfish_adclean_g_conf_c6333c9b77e542061eff66c1cf134748.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6333c9b77e542061eff66c1cf134748();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c6333c9b77e542061eff66c1cf134748();
    });
  }
});
