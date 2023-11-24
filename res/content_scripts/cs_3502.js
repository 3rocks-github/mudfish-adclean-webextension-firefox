
function mudfish_adclean_fce59d6624be745f7d64369faf5813b4() {
  try {
    Sizzle(`.inner > div[class*=" full"] ~ div[class^="arl_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fce59d6624be745f7d64369faf5813b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fce59d6624be745f7d64369faf5813b4, function (items) {
  if (mudfish_adclean_g_conf_fce59d6624be745f7d64369faf5813b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fce59d6624be745f7d64369faf5813b4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fce59d6624be745f7d64369faf5813b4();
    });
  }
});
