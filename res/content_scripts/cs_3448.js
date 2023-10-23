
function mudfish_adclean_94e18f64ea16c9e904a34a2f09be0de4() {
  try {
    Sizzle(`.col-middle > div[style^="z-index:"][style*="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_94e18f64ea16c9e904a34a2f09be0de4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_94e18f64ea16c9e904a34a2f09be0de4, function (items) {
  if (mudfish_adclean_g_conf_94e18f64ea16c9e904a34a2f09be0de4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_94e18f64ea16c9e904a34a2f09be0de4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_94e18f64ea16c9e904a34a2f09be0de4();
    });
  }
});
