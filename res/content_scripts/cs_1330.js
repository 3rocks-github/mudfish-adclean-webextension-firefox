
function mudfish_adclean_0028bf0f0f5ce37ba5105b5b32f536af() {
  try {
    Sizzle(`div[role="main"] > .logo-area`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0028bf0f0f5ce37ba5105b5b32f536af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0028bf0f0f5ce37ba5105b5b32f536af, function (items) {
  if (mudfish_adclean_g_conf_0028bf0f0f5ce37ba5105b5b32f536af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0028bf0f0f5ce37ba5105b5b32f536af();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
