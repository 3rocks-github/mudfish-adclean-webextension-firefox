
function mudfish_adclean_afb43af795857e81ad396c324d88c14d() {
  try {
    Sizzle(`.goods-list__ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_afb43af795857e81ad396c324d88c14d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_afb43af795857e81ad396c324d88c14d, function (items) {
  if (mudfish_adclean_g_conf_afb43af795857e81ad396c324d88c14d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_afb43af795857e81ad396c324d88c14d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
