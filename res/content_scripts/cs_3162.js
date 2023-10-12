
function mudfish_adclean_ad75b8b9e4ca33127193bd1d00daf16b() {
  try {
    Sizzle(`div[class*="-banner"] div[class*=" "][style=" "]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ad75b8b9e4ca33127193bd1d00daf16b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ad75b8b9e4ca33127193bd1d00daf16b, function (items) {
  if (mudfish_adclean_g_conf_ad75b8b9e4ca33127193bd1d00daf16b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ad75b8b9e4ca33127193bd1d00daf16b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
