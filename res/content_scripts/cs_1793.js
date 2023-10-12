
function mudfish_adclean_29a567de2e99282b18e91e62632255fd() {
  try {
    Sizzle(`a[href*="../api/redirectAd.php?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_29a567de2e99282b18e91e62632255fd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_29a567de2e99282b18e91e62632255fd, function (items) {
  if (mudfish_adclean_g_conf_29a567de2e99282b18e91e62632255fd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_29a567de2e99282b18e91e62632255fd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
