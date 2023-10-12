
function mudfish_adclean_60164eb32bff463e94308b2bbc1b6eaf() {
  try {
    Sizzle(`div[id*="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_60164eb32bff463e94308b2bbc1b6eaf = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_60164eb32bff463e94308b2bbc1b6eaf, function (items) {
  if (mudfish_adclean_g_conf_60164eb32bff463e94308b2bbc1b6eaf.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_60164eb32bff463e94308b2bbc1b6eaf();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
