
function mudfish_adclean_7cae75d0da1bd7b210f8808ffb4369e7() {
  try {
    Sizzle(`.bloom-popup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7cae75d0da1bd7b210f8808ffb4369e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7cae75d0da1bd7b210f8808ffb4369e7, function (items) {
  if (mudfish_adclean_g_conf_7cae75d0da1bd7b210f8808ffb4369e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7cae75d0da1bd7b210f8808ffb4369e7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
