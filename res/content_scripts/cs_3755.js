
function mudfish_adclean_d813cd8c9280debd264dbb34643e1b46() {
  try {
    Sizzle(`.banner-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d813cd8c9280debd264dbb34643e1b46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d813cd8c9280debd264dbb34643e1b46, function (items) {
  if (mudfish_adclean_g_conf_d813cd8c9280debd264dbb34643e1b46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d813cd8c9280debd264dbb34643e1b46();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d813cd8c9280debd264dbb34643e1b46();
    });
  }
});
