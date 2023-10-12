
function mudfish_adclean_e06822c2bd9694898c966d2e3062aa38() {
  try {
    Sizzle(`div.sc-64vosk-0.jIkGEl`).forEach(element => {
      element.style.marginBottom = "10px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e06822c2bd9694898c966d2e3062aa38 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e06822c2bd9694898c966d2e3062aa38, function (items) {
  if (mudfish_adclean_g_conf_e06822c2bd9694898c966d2e3062aa38.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e06822c2bd9694898c966d2e3062aa38();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
