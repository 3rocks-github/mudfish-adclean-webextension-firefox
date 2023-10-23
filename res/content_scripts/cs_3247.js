
function mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34() {
  try {
    Sizzle(`.article_view > .p_space + div + .h20`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9d2ce7aab52fcdb1a7f50dbaf34d8e34 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9d2ce7aab52fcdb1a7f50dbaf34d8e34, function (items) {
  if (mudfish_adclean_g_conf_9d2ce7aab52fcdb1a7f50dbaf34d8e34.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9d2ce7aab52fcdb1a7f50dbaf34d8e34();
    });
  }
});
