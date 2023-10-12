
function mudfish_adclean_19fe3bffc9a43bdeacecc972fd72369a() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_19fe3bffc9a43bdeacecc972fd72369a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_19fe3bffc9a43bdeacecc972fd72369a, function (items) {
  if (mudfish_adclean_g_conf_19fe3bffc9a43bdeacecc972fd72369a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_19fe3bffc9a43bdeacecc972fd72369a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
