
function mudfish_adclean_fafe17231e3b02d585ed785afdc57272() {
  try {
    Sizzle(`.adsbygoogle`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fafe17231e3b02d585ed785afdc57272 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fafe17231e3b02d585ed785afdc57272, function (items) {
  if (mudfish_adclean_g_conf_fafe17231e3b02d585ed785afdc57272.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fafe17231e3b02d585ed785afdc57272();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fafe17231e3b02d585ed785afdc57272();
    });
  }
});
