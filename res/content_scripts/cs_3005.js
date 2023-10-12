
function mudfish_adclean_c374fd6fa9ad0659ea75048cd4f33f08() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_7`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c374fd6fa9ad0659ea75048cd4f33f08 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c374fd6fa9ad0659ea75048cd4f33f08, function (items) {
  if (mudfish_adclean_g_conf_c374fd6fa9ad0659ea75048cd4f33f08.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c374fd6fa9ad0659ea75048cd4f33f08();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
