
function mudfish_adclean_5651ff39226909f581af7d711cb28151() {
  try {
    Sizzle(`.ads + div:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5651ff39226909f581af7d711cb28151 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5651ff39226909f581af7d711cb28151, function (items) {
  if (mudfish_adclean_g_conf_5651ff39226909f581af7d711cb28151.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5651ff39226909f581af7d711cb28151();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
