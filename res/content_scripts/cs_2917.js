
function mudfish_adclean_f98a58809dee461818d7575e36f9a11e() {
  try {
    Sizzle(`.trendtabs__list > li[data-adv_yn="Y"]`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f98a58809dee461818d7575e36f9a11e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f98a58809dee461818d7575e36f9a11e, function (items) {
  if (mudfish_adclean_g_conf_f98a58809dee461818d7575e36f9a11e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f98a58809dee461818d7575e36f9a11e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
