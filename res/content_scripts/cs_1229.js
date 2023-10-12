
function mudfish_adclean_0c4cddbb99dd178792f8e95265e5d8ab() {
  try {
    Sizzle(`[data-log-actionid-area^="focus"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0c4cddbb99dd178792f8e95265e5d8ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0c4cddbb99dd178792f8e95265e5d8ab, function (items) {
  if (mudfish_adclean_g_conf_0c4cddbb99dd178792f8e95265e5d8ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0c4cddbb99dd178792f8e95265e5d8ab();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
