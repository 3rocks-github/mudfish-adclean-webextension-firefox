
function mudfish_adclean_ebc66e53e26e584287f941ec9b4394db() {
  try {
    Sizzle(`.npia-board-gallery`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ebc66e53e26e584287f941ec9b4394db = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ebc66e53e26e584287f941ec9b4394db, function (items) {
  if (mudfish_adclean_g_conf_ebc66e53e26e584287f941ec9b4394db.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ebc66e53e26e584287f941ec9b4394db();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ebc66e53e26e584287f941ec9b4394db();
    });
  }
});
