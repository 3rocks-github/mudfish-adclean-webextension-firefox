
function mudfish_adclean_c7dda0af68668ea9b27ec72a97912acc() {
  try {
    Sizzle(`div[class] > div[disp-attr] ~ div[disp-attr]:has(a[href*="//brandsearch.ad.daum.net/"][onclick^="smartLog"]) + .line`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c7dda0af68668ea9b27ec72a97912acc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c7dda0af68668ea9b27ec72a97912acc, function (items) {
  if (mudfish_adclean_g_conf_c7dda0af68668ea9b27ec72a97912acc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c7dda0af68668ea9b27ec72a97912acc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
