
function mudfish_adclean_53db080aa9897dfb0a9156fa8cdd993a() {
  try {
    Sizzle(`.article_wrap div[class^="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_53db080aa9897dfb0a9156fa8cdd993a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_53db080aa9897dfb0a9156fa8cdd993a, function (items) {
  if (mudfish_adclean_g_conf_53db080aa9897dfb0a9156fa8cdd993a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_53db080aa9897dfb0a9156fa8cdd993a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
