
function mudfish_adclean_acaee44b54dfbb545fcdd7f68709e8f8() {
  try {
    Sizzle(`.box_skitter`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_acaee44b54dfbb545fcdd7f68709e8f8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_acaee44b54dfbb545fcdd7f68709e8f8, function (items) {
  if (mudfish_adclean_g_conf_acaee44b54dfbb545fcdd7f68709e8f8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_acaee44b54dfbb545fcdd7f68709e8f8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
