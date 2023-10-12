
function mudfish_adclean_533707a3c7c419fb03acffc7799f65e1() {
  try {
    Sizzle(`div[class^="w_header_"]:nth-child(1)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_533707a3c7c419fb03acffc7799f65e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_533707a3c7c419fb03acffc7799f65e1, function (items) {
  if (mudfish_adclean_g_conf_533707a3c7c419fb03acffc7799f65e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_533707a3c7c419fb03acffc7799f65e1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
