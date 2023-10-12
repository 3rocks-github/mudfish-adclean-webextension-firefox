
function mudfish_adclean_5ac45a6298b11de79598276dc6ad6522() {
  try {
    Sizzle(`iframe[src*="//loader.fmkorea.com/"][src*="_loader/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ac45a6298b11de79598276dc6ad6522 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ac45a6298b11de79598276dc6ad6522, function (items) {
  if (mudfish_adclean_g_conf_5ac45a6298b11de79598276dc6ad6522.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ac45a6298b11de79598276dc6ad6522();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
