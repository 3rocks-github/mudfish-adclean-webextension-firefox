
function mudfish_adclean_9af194b408ce3f7cd3c54587b10190be() {
  try {
    Sizzle(`div[class^="section-"][class$="ad-pc"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9af194b408ce3f7cd3c54587b10190be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9af194b408ce3f7cd3c54587b10190be, function (items) {
  if (mudfish_adclean_g_conf_9af194b408ce3f7cd3c54587b10190be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9af194b408ce3f7cd3c54587b10190be();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
