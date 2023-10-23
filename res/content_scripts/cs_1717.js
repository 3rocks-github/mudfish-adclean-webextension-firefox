
function mudfish_adclean_1405c9e51d09c419c5bb893910f85bb2() {
  try {
    Sizzle(`div[id*="amazon_shopping"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1405c9e51d09c419c5bb893910f85bb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1405c9e51d09c419c5bb893910f85bb2, function (items) {
  if (mudfish_adclean_g_conf_1405c9e51d09c419c5bb893910f85bb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1405c9e51d09c419c5bb893910f85bb2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1405c9e51d09c419c5bb893910f85bb2();
    });
  }
});
