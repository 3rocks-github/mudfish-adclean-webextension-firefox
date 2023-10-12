
function mudfish_adclean_aab2b337be2611417f0e427d7b7465ee() {
  try {
    Sizzle(`#eventzone_img_wrap #con_area > input[type="hidden"] + #con`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aab2b337be2611417f0e427d7b7465ee = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aab2b337be2611417f0e427d7b7465ee, function (items) {
  if (mudfish_adclean_g_conf_aab2b337be2611417f0e427d7b7465ee.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aab2b337be2611417f0e427d7b7465ee();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
