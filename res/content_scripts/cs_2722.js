
function mudfish_adclean_afdea665d705f7b57da1db4b99e6ebc0() {
  try {
    Sizzle(`.content-full`).forEach(element => {
      element.style.height = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_afdea665d705f7b57da1db4b99e6ebc0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_afdea665d705f7b57da1db4b99e6ebc0, function (items) {
  if (mudfish_adclean_g_conf_afdea665d705f7b57da1db4b99e6ebc0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_afdea665d705f7b57da1db4b99e6ebc0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
