
function mudfish_adclean_fbac644154391f09d97c4bb552dbd484() {
  try {
    Sizzle(`article > div[id^="wps_layout"] > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fbac644154391f09d97c4bb552dbd484 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fbac644154391f09d97c4bb552dbd484, function (items) {
  if (mudfish_adclean_g_conf_fbac644154391f09d97c4bb552dbd484.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fbac644154391f09d97c4bb552dbd484();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
