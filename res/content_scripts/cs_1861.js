
function mudfish_adclean_790dbfd4021d3327987d141c3d3a7b90() {
  try {
    Sizzle(`div.ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_790dbfd4021d3327987d141c3d3a7b90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_790dbfd4021d3327987d141c3d3a7b90, function (items) {
  if (mudfish_adclean_g_conf_790dbfd4021d3327987d141c3d3a7b90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_790dbfd4021d3327987d141c3d3a7b90();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
