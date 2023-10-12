
function mudfish_adclean_80bceeb690e31eeaa862ac994e6d164f() {
  try {
    Sizzle(`body > div[style]#modal`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_80bceeb690e31eeaa862ac994e6d164f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_80bceeb690e31eeaa862ac994e6d164f, function (items) {
  if (mudfish_adclean_g_conf_80bceeb690e31eeaa862ac994e6d164f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_80bceeb690e31eeaa862ac994e6d164f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
