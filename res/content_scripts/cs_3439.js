
function mudfish_adclean_9ff72111f98f7295455170dd79476223() {
  try {
    Sizzle(`#wrap_cnts > div[style*="margin:"][style^="width:"].box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9ff72111f98f7295455170dd79476223 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9ff72111f98f7295455170dd79476223, function (items) {
  if (mudfish_adclean_g_conf_9ff72111f98f7295455170dd79476223.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9ff72111f98f7295455170dd79476223();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9ff72111f98f7295455170dd79476223();
    });
  }
});
