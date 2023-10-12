
function mudfish_adclean_35b7a08a6cc350ef2e3aecc501a4b77b() {
  try {
    Sizzle(`div[id^="wps_layout"][data-desc*="광고"][data-box-file*="/box/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35b7a08a6cc350ef2e3aecc501a4b77b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35b7a08a6cc350ef2e3aecc501a4b77b, function (items) {
  if (mudfish_adclean_g_conf_35b7a08a6cc350ef2e3aecc501a4b77b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35b7a08a6cc350ef2e3aecc501a4b77b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
