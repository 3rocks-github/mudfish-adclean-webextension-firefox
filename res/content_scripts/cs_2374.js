
function mudfish_adclean_89389ee2207b74dc40c84c8ee71b948d() {
  try {
    Sizzle(`.global-top`).forEach(element => {
      element.style.top = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_89389ee2207b74dc40c84c8ee71b948d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_89389ee2207b74dc40c84c8ee71b948d, function (items) {
  if (mudfish_adclean_g_conf_89389ee2207b74dc40c84c8ee71b948d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_89389ee2207b74dc40c84c8ee71b948d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
