
function mudfish_adclean_3a45ae867e32b70f9e04e6322db64c47() {
  try {
    Sizzle(`div[style] > .td_block_wrap:has(a[target="blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3a45ae867e32b70f9e04e6322db64c47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3a45ae867e32b70f9e04e6322db64c47, function (items) {
  if (mudfish_adclean_g_conf_3a45ae867e32b70f9e04e6322db64c47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3a45ae867e32b70f9e04e6322db64c47();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
