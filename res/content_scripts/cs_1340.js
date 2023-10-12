
function mudfish_adclean_be8d310edaa207b30306055fb0f2ef90() {
  try {
    Sizzle(`#_rollingBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_be8d310edaa207b30306055fb0f2ef90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_be8d310edaa207b30306055fb0f2ef90, function (items) {
  if (mudfish_adclean_g_conf_be8d310edaa207b30306055fb0f2ef90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_be8d310edaa207b30306055fb0f2ef90();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
