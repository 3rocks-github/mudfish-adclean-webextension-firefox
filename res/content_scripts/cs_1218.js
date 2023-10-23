
function mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36() {
  try {
    Sizzle(`.shoplink_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cdc41749eb8ca3c3fdb347901015fe36 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cdc41749eb8ca3c3fdb347901015fe36, function (items) {
  if (mudfish_adclean_g_conf_cdc41749eb8ca3c3fdb347901015fe36.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cdc41749eb8ca3c3fdb347901015fe36();
    });
  }
});
