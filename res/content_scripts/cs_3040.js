
function mudfish_adclean_84c19de27a6c1ea7602da9638daef804() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_1`).forEach(element => {
      element.style.width = "239px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84c19de27a6c1ea7602da9638daef804 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84c19de27a6c1ea7602da9638daef804, function (items) {
  if (mudfish_adclean_g_conf_84c19de27a6c1ea7602da9638daef804.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84c19de27a6c1ea7602da9638daef804();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
