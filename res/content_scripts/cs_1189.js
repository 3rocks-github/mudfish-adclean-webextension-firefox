
function mudfish_adclean_e8153613e31bfcf979dde2baeed06d46() {
  try {
    Sizzle(`div[id*="_AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e8153613e31bfcf979dde2baeed06d46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e8153613e31bfcf979dde2baeed06d46, function (items) {
  if (mudfish_adclean_g_conf_e8153613e31bfcf979dde2baeed06d46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e8153613e31bfcf979dde2baeed06d46();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
