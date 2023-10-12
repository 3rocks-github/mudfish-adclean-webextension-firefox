
function mudfish_adclean_31981673e369fa201ccdc7e660f6b2d9() {
  try {
    Sizzle(`.google_bn`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_31981673e369fa201ccdc7e660f6b2d9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_31981673e369fa201ccdc7e660f6b2d9, function (items) {
  if (mudfish_adclean_g_conf_31981673e369fa201ccdc7e660f6b2d9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_31981673e369fa201ccdc7e660f6b2d9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
