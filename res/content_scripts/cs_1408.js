
function mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39() {
  try {
    Sizzle(`.row > div[class][id=""] ~ #Contents ~ a[href*="Board=enterprise"] + div[class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d2bf5aa6c0e3e71b38f92840a9b0e39 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d2bf5aa6c0e3e71b38f92840a9b0e39, function (items) {
  if (mudfish_adclean_g_conf_9d2bf5aa6c0e3e71b38f92840a9b0e39.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d2bf5aa6c0e3e71b38f92840a9b0e39();
    });
  }
});
