
function mudfish_adclean_3885978298aefa3ca198999a0cb60320() {
  try {
    Sizzle(`figure[id^="image-"]:has(> img[src^="/files/media/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3885978298aefa3ca198999a0cb60320 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3885978298aefa3ca198999a0cb60320, function (items) {
  if (mudfish_adclean_g_conf_3885978298aefa3ca198999a0cb60320.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3885978298aefa3ca198999a0cb60320();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
