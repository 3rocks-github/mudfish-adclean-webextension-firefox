
function mudfish_adclean_bd458a1b69315cc91309655919128087() {
  try {
    Sizzle(`section[id^="block-"].widget_block`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bd458a1b69315cc91309655919128087 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bd458a1b69315cc91309655919128087, function (items) {
  if (mudfish_adclean_g_conf_bd458a1b69315cc91309655919128087.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bd458a1b69315cc91309655919128087();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
