
function mudfish_adclean_9be3d46407a68868aaf1f4f99f66898c() {
  try {
    Sizzle(`ol.bd_lst li[class]:has(span[class^="ad_"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9be3d46407a68868aaf1f4f99f66898c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9be3d46407a68868aaf1f4f99f66898c, function (items) {
  if (mudfish_adclean_g_conf_9be3d46407a68868aaf1f4f99f66898c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9be3d46407a68868aaf1f4f99f66898c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
