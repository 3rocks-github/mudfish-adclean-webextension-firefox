
function mudfish_adclean_c6b3e21086f97d8186cb5de9dd7f8787() {
  try {
    Sizzle(`div[class^="bn_"]:not([class*=" "])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6b3e21086f97d8186cb5de9dd7f8787 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6b3e21086f97d8186cb5de9dd7f8787, function (items) {
  if (mudfish_adclean_g_conf_c6b3e21086f97d8186cb5de9dd7f8787.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6b3e21086f97d8186cb5de9dd7f8787();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
