
function mudfish_adclean_e86910d89206aa338eb0b5d4f507ea22() {
  try {
    Sizzle(`div[class^="popup_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e86910d89206aa338eb0b5d4f507ea22 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e86910d89206aa338eb0b5d4f507ea22, function (items) {
  if (mudfish_adclean_g_conf_e86910d89206aa338eb0b5d4f507ea22.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e86910d89206aa338eb0b5d4f507ea22();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e86910d89206aa338eb0b5d4f507ea22();
    });
  }
});
