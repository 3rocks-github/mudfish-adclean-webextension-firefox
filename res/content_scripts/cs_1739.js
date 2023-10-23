
function mudfish_adclean_71d4eff32f5beaaf7dc07af4934ab50c() {
  try {
    Sizzle(`#ct div[class^="ly_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_71d4eff32f5beaaf7dc07af4934ab50c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_71d4eff32f5beaaf7dc07af4934ab50c, function (items) {
  if (mudfish_adclean_g_conf_71d4eff32f5beaaf7dc07af4934ab50c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_71d4eff32f5beaaf7dc07af4934ab50c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_71d4eff32f5beaaf7dc07af4934ab50c();
    });
  }
});
