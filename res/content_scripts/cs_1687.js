
function mudfish_adclean_a70f52bb165d0d4b1f981de4928a5664() {
  try {
    Sizzle(`a[id^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a70f52bb165d0d4b1f981de4928a5664 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a70f52bb165d0d4b1f981de4928a5664, function (items) {
  if (mudfish_adclean_g_conf_a70f52bb165d0d4b1f981de4928a5664.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a70f52bb165d0d4b1f981de4928a5664();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
