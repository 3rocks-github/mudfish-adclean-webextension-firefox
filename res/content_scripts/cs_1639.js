
function mudfish_adclean_ab2fd07dbf47beb3c9ca8562635050d3() {
  try {
    Sizzle(`.module.module_plugin a[href*="//coinone.co.kr/user/signup?ref="]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ab2fd07dbf47beb3c9ca8562635050d3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ab2fd07dbf47beb3c9ca8562635050d3, function (items) {
  if (mudfish_adclean_g_conf_ab2fd07dbf47beb3c9ca8562635050d3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ab2fd07dbf47beb3c9ca8562635050d3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
