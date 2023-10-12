
function mudfish_adclean_46c41aaffdbc441cc29d3eb863a5be10() {
  try {
    Sizzle(`#top_src > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46c41aaffdbc441cc29d3eb863a5be10 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46c41aaffdbc441cc29d3eb863a5be10, function (items) {
  if (mudfish_adclean_g_conf_46c41aaffdbc441cc29d3eb863a5be10.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46c41aaffdbc441cc29d3eb863a5be10();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
