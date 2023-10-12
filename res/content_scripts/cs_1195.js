
function mudfish_adclean_fb777e94a990b415aed81deaac6a6782() {
  try {
    Sizzle(`#related-writer-info .in-writer-info`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb777e94a990b415aed81deaac6a6782 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb777e94a990b415aed81deaac6a6782, function (items) {
  if (mudfish_adclean_g_conf_fb777e94a990b415aed81deaac6a6782.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb777e94a990b415aed81deaac6a6782();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
