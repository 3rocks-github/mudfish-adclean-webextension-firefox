
function mudfish_adclean_c730fc65642c179557e0d1246429944b() {
  try {
    Sizzle(`#Contents > #sideBox > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c730fc65642c179557e0d1246429944b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c730fc65642c179557e0d1246429944b, function (items) {
  if (mudfish_adclean_g_conf_c730fc65642c179557e0d1246429944b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c730fc65642c179557e0d1246429944b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
