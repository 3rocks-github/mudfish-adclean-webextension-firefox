
function mudfish_adclean_46b5e8d2b778862cdd0ab35580912e2d() {
  try {
    Sizzle(`div[class^="rightbanner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46b5e8d2b778862cdd0ab35580912e2d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46b5e8d2b778862cdd0ab35580912e2d, function (items) {
  if (mudfish_adclean_g_conf_46b5e8d2b778862cdd0ab35580912e2d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46b5e8d2b778862cdd0ab35580912e2d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
