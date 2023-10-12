
function mudfish_adclean_29ee5d0f3fb86d6962eb1a582f8d7217() {
  try {
    Sizzle(`.banner-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_29ee5d0f3fb86d6962eb1a582f8d7217 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_29ee5d0f3fb86d6962eb1a582f8d7217, function (items) {
  if (mudfish_adclean_g_conf_29ee5d0f3fb86d6962eb1a582f8d7217.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_29ee5d0f3fb86d6962eb1a582f8d7217();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
