
function mudfish_adclean_881aaefd375b1bc47bb614ec6ff8517a() {
  try {
    Sizzle(`[class*="ad_bizwatch_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_881aaefd375b1bc47bb614ec6ff8517a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_881aaefd375b1bc47bb614ec6ff8517a, function (items) {
  if (mudfish_adclean_g_conf_881aaefd375b1bc47bb614ec6ff8517a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_881aaefd375b1bc47bb614ec6ff8517a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
