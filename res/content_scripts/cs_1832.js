
function mudfish_adclean_082b6e35855cc49c8173db9812f87702() {
  try {
    Sizzle(`div#newsRank`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_082b6e35855cc49c8173db9812f87702 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_082b6e35855cc49c8173db9812f87702, function (items) {
  if (mudfish_adclean_g_conf_082b6e35855cc49c8173db9812f87702.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_082b6e35855cc49c8173db9812f87702();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
