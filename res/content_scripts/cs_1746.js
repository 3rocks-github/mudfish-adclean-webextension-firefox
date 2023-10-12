
function mudfish_adclean_93313fe38f46ef5bdf5f068d02954259() {
  try {
    Sizzle(`table.adsbygoogle ~ table[style^="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_93313fe38f46ef5bdf5f068d02954259 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_93313fe38f46ef5bdf5f068d02954259, function (items) {
  if (mudfish_adclean_g_conf_93313fe38f46ef5bdf5f068d02954259.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_93313fe38f46ef5bdf5f068d02954259();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
