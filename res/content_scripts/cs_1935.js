
function mudfish_adclean_7e0d1faa340c2616bbea5e86ec11e240() {
  try {
    Sizzle(`div[id^="powerbiz"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7e0d1faa340c2616bbea5e86ec11e240 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7e0d1faa340c2616bbea5e86ec11e240, function (items) {
  if (mudfish_adclean_g_conf_7e0d1faa340c2616bbea5e86ec11e240.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7e0d1faa340c2616bbea5e86ec11e240();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
