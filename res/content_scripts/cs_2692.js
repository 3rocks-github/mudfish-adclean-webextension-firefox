
function mudfish_adclean_653297ba91bce1c75eb09d1fdefc2850() {
  try {
    Sizzle(`div[class*="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_653297ba91bce1c75eb09d1fdefc2850 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_653297ba91bce1c75eb09d1fdefc2850, function (items) {
  if (mudfish_adclean_g_conf_653297ba91bce1c75eb09d1fdefc2850.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_653297ba91bce1c75eb09d1fdefc2850();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_653297ba91bce1c75eb09d1fdefc2850();
    });
  }
});
