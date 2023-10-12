
function mudfish_adclean_35b50822d91ec20fdfdeedb15bf53d91() {
  try {
    Sizzle(`.comment_best_wrap ~ div[id][style^="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35b50822d91ec20fdfdeedb15bf53d91 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35b50822d91ec20fdfdeedb15bf53d91, function (items) {
  if (mudfish_adclean_g_conf_35b50822d91ec20fdfdeedb15bf53d91.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35b50822d91ec20fdfdeedb15bf53d91();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
