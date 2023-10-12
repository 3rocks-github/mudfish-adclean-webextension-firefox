
function mudfish_adclean_a88459f0cf46ef74a45c807f8fc49ddd() {
  try {
    Sizzle(`.adadwrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a88459f0cf46ef74a45c807f8fc49ddd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a88459f0cf46ef74a45c807f8fc49ddd, function (items) {
  if (mudfish_adclean_g_conf_a88459f0cf46ef74a45c807f8fc49ddd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a88459f0cf46ef74a45c807f8fc49ddd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
