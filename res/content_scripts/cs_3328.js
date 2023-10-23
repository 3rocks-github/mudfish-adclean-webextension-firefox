
function mudfish_adclean_5c52a96ad73932602ed9e30773f26875() {
  try {
    Sizzle(`div[class*="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5c52a96ad73932602ed9e30773f26875 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5c52a96ad73932602ed9e30773f26875, function (items) {
  if (mudfish_adclean_g_conf_5c52a96ad73932602ed9e30773f26875.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5c52a96ad73932602ed9e30773f26875();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5c52a96ad73932602ed9e30773f26875();
    });
  }
});
