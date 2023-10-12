
function mudfish_adclean_af33c573eefcb27afb91404e90657671() {
  try {
    Sizzle(`div[class*="-ads"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_af33c573eefcb27afb91404e90657671 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_af33c573eefcb27afb91404e90657671, function (items) {
  if (mudfish_adclean_g_conf_af33c573eefcb27afb91404e90657671.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_af33c573eefcb27afb91404e90657671();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
