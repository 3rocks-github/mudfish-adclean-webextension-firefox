
function mudfish_adclean_610c57fb517f1ecdfa8799ae6b2139e6() {
  try {
    Sizzle(`div[class$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_610c57fb517f1ecdfa8799ae6b2139e6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_610c57fb517f1ecdfa8799ae6b2139e6, function (items) {
  if (mudfish_adclean_g_conf_610c57fb517f1ecdfa8799ae6b2139e6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_610c57fb517f1ecdfa8799ae6b2139e6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
