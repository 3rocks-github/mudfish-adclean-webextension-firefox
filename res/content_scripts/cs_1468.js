
function mudfish_adclean_e153e9c49e8e8e03aeda31f79f585611() {
  try {
    Sizzle(`.sc._pwl_video_container`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e153e9c49e8e8e03aeda31f79f585611 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e153e9c49e8e8e03aeda31f79f585611, function (items) {
  if (mudfish_adclean_g_conf_e153e9c49e8e8e03aeda31f79f585611.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e153e9c49e8e8e03aeda31f79f585611();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
