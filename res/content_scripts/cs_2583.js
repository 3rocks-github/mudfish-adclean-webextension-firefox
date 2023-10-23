
function mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474() {
  try {
    Sizzle(`div:has(> div > div > div:contains(연관상품) > div:has(> div:contains(AD)) > img[alt="AD 가이드"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c1e3dabdf4e57d141f64f5cab06e474 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c1e3dabdf4e57d141f64f5cab06e474, function (items) {
  if (mudfish_adclean_g_conf_3c1e3dabdf4e57d141f64f5cab06e474.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3c1e3dabdf4e57d141f64f5cab06e474();
    });
  }
});
