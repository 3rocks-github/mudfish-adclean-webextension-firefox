
function mudfish_adclean_93e9a268152c6d7101f0fc38c7444184() {
  try {
    Sizzle(`#banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_93e9a268152c6d7101f0fc38c7444184 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_93e9a268152c6d7101f0fc38c7444184, function (items) {
  if (mudfish_adclean_g_conf_93e9a268152c6d7101f0fc38c7444184.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_93e9a268152c6d7101f0fc38c7444184();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
