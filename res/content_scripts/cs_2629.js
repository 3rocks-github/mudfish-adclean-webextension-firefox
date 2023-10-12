
function mudfish_adclean_122205f721a9f885ec530bbd6f347f47() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_122205f721a9f885ec530bbd6f347f47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_122205f721a9f885ec530bbd6f347f47, function (items) {
  if (mudfish_adclean_g_conf_122205f721a9f885ec530bbd6f347f47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_122205f721a9f885ec530bbd6f347f47();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
