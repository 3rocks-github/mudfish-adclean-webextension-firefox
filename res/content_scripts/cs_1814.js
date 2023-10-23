
function mudfish_adclean_5caf03880723edf76a8fe8e1cbd5eacc() {
  try {
    Sizzle(`body > #container > .cpz_inner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5caf03880723edf76a8fe8e1cbd5eacc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5caf03880723edf76a8fe8e1cbd5eacc, function (items) {
  if (mudfish_adclean_g_conf_5caf03880723edf76a8fe8e1cbd5eacc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5caf03880723edf76a8fe8e1cbd5eacc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5caf03880723edf76a8fe8e1cbd5eacc();
    });
  }
});
