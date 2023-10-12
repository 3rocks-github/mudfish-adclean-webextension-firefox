
function mudfish_adclean_2e468442ecc9553fdb63599e6ab84bce() {
  try {
    Sizzle(`.content_join`).forEach(element => {
      element.style.marginLeft = "calc(50% - 200px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2e468442ecc9553fdb63599e6ab84bce = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2e468442ecc9553fdb63599e6ab84bce, function (items) {
  if (mudfish_adclean_g_conf_2e468442ecc9553fdb63599e6ab84bce.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2e468442ecc9553fdb63599e6ab84bce();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
