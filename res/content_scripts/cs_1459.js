
function mudfish_adclean_dc865153604cfbf2ed701e9b695a466d() {
  try {
    Sizzle(`#viewConts div[style][id^="articleBody"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dc865153604cfbf2ed701e9b695a466d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dc865153604cfbf2ed701e9b695a466d, function (items) {
  if (mudfish_adclean_g_conf_dc865153604cfbf2ed701e9b695a466d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dc865153604cfbf2ed701e9b695a466d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
