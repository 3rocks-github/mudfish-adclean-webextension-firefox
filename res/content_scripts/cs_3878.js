
function mudfish_adclean_77fbe2b5a37c295285f8a9f16de7d4ea() {
  try {
    Sizzle(`body`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_77fbe2b5a37c295285f8a9f16de7d4ea = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_77fbe2b5a37c295285f8a9f16de7d4ea, function (items) {
  if (mudfish_adclean_g_conf_77fbe2b5a37c295285f8a9f16de7d4ea.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_77fbe2b5a37c295285f8a9f16de7d4ea();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_77fbe2b5a37c295285f8a9f16de7d4ea();
    });
  }
});
