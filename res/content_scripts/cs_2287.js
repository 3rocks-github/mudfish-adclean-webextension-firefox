
function mudfish_adclean_b6bf6135143320993d1628405f8390be() {
  try {
    Sizzle(`.inner-main [data-cloud*="_ad_"] + div`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b6bf6135143320993d1628405f8390be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b6bf6135143320993d1628405f8390be, function (items) {
  if (mudfish_adclean_g_conf_b6bf6135143320993d1628405f8390be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b6bf6135143320993d1628405f8390be();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
