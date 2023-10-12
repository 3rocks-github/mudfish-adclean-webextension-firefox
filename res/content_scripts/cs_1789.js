
function mudfish_adclean_e46ec1278b6c89f66fc74dd07f30fbbc() {
  try {
    Sizzle(`iframe[src^="https://ads.gamemeca.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e46ec1278b6c89f66fc74dd07f30fbbc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e46ec1278b6c89f66fc74dd07f30fbbc, function (items) {
  if (mudfish_adclean_g_conf_e46ec1278b6c89f66fc74dd07f30fbbc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e46ec1278b6c89f66fc74dd07f30fbbc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
