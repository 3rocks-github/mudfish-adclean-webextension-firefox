
function mudfish_adclean_b713c1256202fd51b326397f5e094b08() {
  try {
    Sizzle(`.visible-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b713c1256202fd51b326397f5e094b08 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b713c1256202fd51b326397f5e094b08, function (items) {
  if (mudfish_adclean_g_conf_b713c1256202fd51b326397f5e094b08.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b713c1256202fd51b326397f5e094b08();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b713c1256202fd51b326397f5e094b08();
    });
  }
});
