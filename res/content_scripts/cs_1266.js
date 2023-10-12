
function mudfish_adclean_819ada4efca33b077d1588f5c517b5e5() {
  try {
    Sizzle(`div[id*="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_819ada4efca33b077d1588f5c517b5e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_819ada4efca33b077d1588f5c517b5e5, function (items) {
  if (mudfish_adclean_g_conf_819ada4efca33b077d1588f5c517b5e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_819ada4efca33b077d1588f5c517b5e5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
