
function mudfish_adclean_8c68d5d131380207cfc365afd7118709() {
  try {
    Sizzle(`div[class] > div[disp-attr] ~ div[disp-attr]:has(a[href*="//brandsearch.ad.daum.net/"][onclick^="smartLog"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c68d5d131380207cfc365afd7118709 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c68d5d131380207cfc365afd7118709, function (items) {
  if (mudfish_adclean_g_conf_8c68d5d131380207cfc365afd7118709.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c68d5d131380207cfc365afd7118709();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
