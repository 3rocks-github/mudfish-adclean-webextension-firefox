
function mudfish_adclean_8397078ae65c016c98ad5de23d2a757c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="style_section_row_"] ul[class*="asideBrand_brand_"] > li:has(a[href*="//adcr.naver.com/adcr"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8397078ae65c016c98ad5de23d2a757c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8397078ae65c016c98ad5de23d2a757c();
  });
}
