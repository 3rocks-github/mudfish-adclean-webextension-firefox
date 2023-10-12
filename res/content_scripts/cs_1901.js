
function mudfish_adclean_0febcd5cd9eaef08d746bacdb61a3d4b() {
  try {
    Sizzle(`#dpArticleBlocksWrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0febcd5cd9eaef08d746bacdb61a3d4b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0febcd5cd9eaef08d746bacdb61a3d4b, function (items) {
  if (mudfish_adclean_g_conf_0febcd5cd9eaef08d746bacdb61a3d4b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0febcd5cd9eaef08d746bacdb61a3d4b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
