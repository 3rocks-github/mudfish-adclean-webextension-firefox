
function mudfish_adclean_160cbff17344b77af7795647895e2d34() {
  try {
    Sizzle(`#article-view div[style].float-center .clearfix > div[class^="box-margin"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_160cbff17344b77af7795647895e2d34 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_160cbff17344b77af7795647895e2d34, function (items) {
  if (mudfish_adclean_g_conf_160cbff17344b77af7795647895e2d34.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_160cbff17344b77af7795647895e2d34();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
