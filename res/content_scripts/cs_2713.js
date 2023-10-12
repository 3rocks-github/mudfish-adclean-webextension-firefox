
function mudfish_adclean_da19e0664f93b2ba6d4fb729be34779c() {
  try {
    Sizzle(`#hd_qnb`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_da19e0664f93b2ba6d4fb729be34779c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_da19e0664f93b2ba6d4fb729be34779c, function (items) {
  if (mudfish_adclean_g_conf_da19e0664f93b2ba6d4fb729be34779c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_da19e0664f93b2ba6d4fb729be34779c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
