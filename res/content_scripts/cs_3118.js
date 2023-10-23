
function mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49() {
  try {
    Sizzle(`#btnlist > #listChoiceScope`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_656ef13d4e1e2e8ef63dd640a21a5c49 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_656ef13d4e1e2e8ef63dd640a21a5c49, function (items) {
  if (mudfish_adclean_g_conf_656ef13d4e1e2e8ef63dd640a21a5c49.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_656ef13d4e1e2e8ef63dd640a21a5c49();
    });
  }
});
