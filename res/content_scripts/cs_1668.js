
function mudfish_adclean_df0d71f94beb263e3c72c2df8097b7a8() {
  try {
    Sizzle(`div[class*="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_df0d71f94beb263e3c72c2df8097b7a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_df0d71f94beb263e3c72c2df8097b7a8, function (items) {
  if (mudfish_adclean_g_conf_df0d71f94beb263e3c72c2df8097b7a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_df0d71f94beb263e3c72c2df8097b7a8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
