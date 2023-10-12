
function mudfish_adclean_96b3a9b1fe473539f47f3c47e24aea5e() {
  try {
    Sizzle(`div[id^="scm_ban"][style*="url(/media/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_96b3a9b1fe473539f47f3c47e24aea5e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_96b3a9b1fe473539f47f3c47e24aea5e, function (items) {
  if (mudfish_adclean_g_conf_96b3a9b1fe473539f47f3c47e24aea5e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_96b3a9b1fe473539f47f3c47e24aea5e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
