
function mudfish_adclean_9ff2912b823abc7a31d33bda30487081() {
  try {
    Sizzle(`.adtive`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9ff2912b823abc7a31d33bda30487081 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9ff2912b823abc7a31d33bda30487081, function (items) {
  if (mudfish_adclean_g_conf_9ff2912b823abc7a31d33bda30487081.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9ff2912b823abc7a31d33bda30487081();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
