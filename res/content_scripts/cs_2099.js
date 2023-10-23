
function mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97() {
  try {
    Sizzle(`div[id^="float"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_867c7387c81961a4ec62f6f3cd3f1a97 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_867c7387c81961a4ec62f6f3cd3f1a97, function (items) {
  if (mudfish_adclean_g_conf_867c7387c81961a4ec62f6f3cd3f1a97.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_867c7387c81961a4ec62f6f3cd3f1a97();
    });
  }
});
