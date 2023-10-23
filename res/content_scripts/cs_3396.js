
function mudfish_adclean_08ec8e8de85ba4f6991ebc6051d80b39() {
  try {
    Sizzle(`div[id$="ad"][class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_08ec8e8de85ba4f6991ebc6051d80b39 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_08ec8e8de85ba4f6991ebc6051d80b39, function (items) {
  if (mudfish_adclean_g_conf_08ec8e8de85ba4f6991ebc6051d80b39.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_08ec8e8de85ba4f6991ebc6051d80b39();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_08ec8e8de85ba4f6991ebc6051d80b39();
    });
  }
});
