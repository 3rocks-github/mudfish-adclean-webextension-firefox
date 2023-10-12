
function mudfish_adclean_baf27207b6c808612cab7170317b33c9() {
  try {
    Sizzle(`#container > div[class][style*="/GNBBottomLineBanner_"][style^="background-image:url("]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_baf27207b6c808612cab7170317b33c9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_baf27207b6c808612cab7170317b33c9, function (items) {
  if (mudfish_adclean_g_conf_baf27207b6c808612cab7170317b33c9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_baf27207b6c808612cab7170317b33c9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
