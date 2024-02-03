
function mudfish_adclean_9f61553d5df1afab17dbe670dee7a43b() {
  try {
    Sizzle(`li[style][id^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9f61553d5df1afab17dbe670dee7a43b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9f61553d5df1afab17dbe670dee7a43b, function (items) {
  if (mudfish_adclean_g_conf_9f61553d5df1afab17dbe670dee7a43b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9f61553d5df1afab17dbe670dee7a43b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9f61553d5df1afab17dbe670dee7a43b();
    });
  }
});
