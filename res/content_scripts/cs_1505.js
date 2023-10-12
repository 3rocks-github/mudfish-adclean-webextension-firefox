
function mudfish_adclean_7072e80dd3eb900ad2c8bf2923ab505d() {
  try {
    Sizzle(`[id$="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7072e80dd3eb900ad2c8bf2923ab505d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7072e80dd3eb900ad2c8bf2923ab505d, function (items) {
  if (mudfish_adclean_g_conf_7072e80dd3eb900ad2c8bf2923ab505d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7072e80dd3eb900ad2c8bf2923ab505d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
