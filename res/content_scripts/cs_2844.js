
function mudfish_adclean_395261f14faa966bd26e91eff55b4319() {
  try {
    Sizzle(`.main-top-banner + .box`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_395261f14faa966bd26e91eff55b4319 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_395261f14faa966bd26e91eff55b4319, function (items) {
  if (mudfish_adclean_g_conf_395261f14faa966bd26e91eff55b4319.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_395261f14faa966bd26e91eff55b4319();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
