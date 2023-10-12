
function mudfish_adclean_4dcfd3c1221f50a440e72c5f271c7ffe() {
  try {
    Sizzle(`div[id^="topAd"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4dcfd3c1221f50a440e72c5f271c7ffe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4dcfd3c1221f50a440e72c5f271c7ffe, function (items) {
  if (mudfish_adclean_g_conf_4dcfd3c1221f50a440e72c5f271c7ffe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4dcfd3c1221f50a440e72c5f271c7ffe();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
