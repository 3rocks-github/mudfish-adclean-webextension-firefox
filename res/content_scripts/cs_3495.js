
function mudfish_adclean_bb30ac4e9bdb8c2a94341629fc6bc521() {
  try {
    Sizzle(`iframe[src^="https://ojsfile.ohmynews.com/AD_FILE/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb30ac4e9bdb8c2a94341629fc6bc521 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb30ac4e9bdb8c2a94341629fc6bc521, function (items) {
  if (mudfish_adclean_g_conf_bb30ac4e9bdb8c2a94341629fc6bc521.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb30ac4e9bdb8c2a94341629fc6bc521();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb30ac4e9bdb8c2a94341629fc6bc521();
    });
  }
});
