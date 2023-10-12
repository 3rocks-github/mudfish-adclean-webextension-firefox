
function mudfish_adclean_3d243c0fdd2eac34d4d1190c0f0acf74() {
  try {
    Sizzle(`#advertiseInPlayer`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3d243c0fdd2eac34d4d1190c0f0acf74 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3d243c0fdd2eac34d4d1190c0f0acf74, function (items) {
  if (mudfish_adclean_g_conf_3d243c0fdd2eac34d4d1190c0f0acf74.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3d243c0fdd2eac34d4d1190c0f0acf74();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
