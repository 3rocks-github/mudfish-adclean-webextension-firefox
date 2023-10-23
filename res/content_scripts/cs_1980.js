
function mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2() {
  try {
    Sizzle(`iframe[src*="//realty.chosun.com/RealtyCommon/Promotion"][src$=".html"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3c67a20a072d2d957a2c4c400d7d98e2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3c67a20a072d2d957a2c4c400d7d98e2, function (items) {
  if (mudfish_adclean_g_conf_3c67a20a072d2d957a2c4c400d7d98e2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3c67a20a072d2d957a2c4c400d7d98e2();
    });
  }
});
