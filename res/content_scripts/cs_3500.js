
function mudfish_adclean_639580686ea20d0c1a4b13968a7ce73d() {
  try {
    Sizzle(`.left_area > a[href^="https://smartstore.naver.com/"] + .h20`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_639580686ea20d0c1a4b13968a7ce73d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_639580686ea20d0c1a4b13968a7ce73d, function (items) {
  if (mudfish_adclean_g_conf_639580686ea20d0c1a4b13968a7ce73d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_639580686ea20d0c1a4b13968a7ce73d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_639580686ea20d0c1a4b13968a7ce73d();
    });
  }
});
