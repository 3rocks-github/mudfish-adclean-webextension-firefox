
function mudfish_adclean_7ebe209dc3720db871a270a9499fc3fc() {
  try {
    Sizzle(`div[class^="style__GoogleAdSenseContainer-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7ebe209dc3720db871a270a9499fc3fc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7ebe209dc3720db871a270a9499fc3fc, function (items) {
  if (mudfish_adclean_g_conf_7ebe209dc3720db871a270a9499fc3fc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7ebe209dc3720db871a270a9499fc3fc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7ebe209dc3720db871a270a9499fc3fc();
    });
  }
});
