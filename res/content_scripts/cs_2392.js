
function mudfish_adclean_8397078ae65c016c98ad5de23d2a757c() {
  try {
    Sizzle(`div[class^="style_section_row_"] ul[class*="asideBrand_brand_"] > li:has(a[href*="//adcr.naver.com/adcr"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8397078ae65c016c98ad5de23d2a757c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8397078ae65c016c98ad5de23d2a757c, function (items) {
  if (mudfish_adclean_g_conf_8397078ae65c016c98ad5de23d2a757c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8397078ae65c016c98ad5de23d2a757c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8397078ae65c016c98ad5de23d2a757c();
    });
  }
});
