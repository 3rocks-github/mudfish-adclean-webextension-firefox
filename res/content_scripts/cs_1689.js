
function mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5() {
  try {
    Sizzle(`iframe[src*="//arca.live/external/callad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8bf130a144fbb56f49d5e8adee3a3fc5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8bf130a144fbb56f49d5e8adee3a3fc5, function (items) {
  if (mudfish_adclean_g_conf_8bf130a144fbb56f49d5e8adee3a3fc5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8bf130a144fbb56f49d5e8adee3a3fc5();
    });
  }
});
