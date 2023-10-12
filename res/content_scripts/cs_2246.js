
function mudfish_adclean_7d1567151e8726fad394bf774b848340() {
  try {
    Sizzle(`.box__login #login_tab`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7d1567151e8726fad394bf774b848340 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7d1567151e8726fad394bf774b848340, function (items) {
  if (mudfish_adclean_g_conf_7d1567151e8726fad394bf774b848340.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7d1567151e8726fad394bf774b848340();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
