
function mudfish_adclean_8a9247fffe016e2860257e4f6a3ba83e() {
  try {
    Sizzle(`.trendpickup__container > .trendtab-cont:has(p.badge--ad)`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8a9247fffe016e2860257e4f6a3ba83e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8a9247fffe016e2860257e4f6a3ba83e, function (items) {
  if (mudfish_adclean_g_conf_8a9247fffe016e2860257e4f6a3ba83e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8a9247fffe016e2860257e4f6a3ba83e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
