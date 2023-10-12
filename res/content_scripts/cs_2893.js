
function mudfish_adclean_cae3302ed068ea174a15a2f7e84e7d11() {
  try {
    Sizzle(`.popup`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cae3302ed068ea174a15a2f7e84e7d11 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cae3302ed068ea174a15a2f7e84e7d11, function (items) {
  if (mudfish_adclean_g_conf_cae3302ed068ea174a15a2f7e84e7d11.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cae3302ed068ea174a15a2f7e84e7d11();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
