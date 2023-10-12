
function mudfish_adclean_d31c637aab74b76e1736602543d4db49() {
  try {
    Sizzle(`.page-content > .row.no-gap.no-space > .col-33`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d31c637aab74b76e1736602543d4db49 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d31c637aab74b76e1736602543d4db49, function (items) {
  if (mudfish_adclean_g_conf_d31c637aab74b76e1736602543d4db49.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d31c637aab74b76e1736602543d4db49();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
