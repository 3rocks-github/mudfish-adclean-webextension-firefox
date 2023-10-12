
function mudfish_adclean_b004e8018bfdb67b485d59f16ca494f0() {
  try {
    Sizzle(`.google-ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b004e8018bfdb67b485d59f16ca494f0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b004e8018bfdb67b485d59f16ca494f0, function (items) {
  if (mudfish_adclean_g_conf_b004e8018bfdb67b485d59f16ca494f0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b004e8018bfdb67b485d59f16ca494f0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
