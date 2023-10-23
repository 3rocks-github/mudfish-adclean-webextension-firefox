
function mudfish_adclean_7db0c070dc8aa250ef2b46ac460d97ef() {
  try {
    Sizzle(`div[class^="adv-group"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7db0c070dc8aa250ef2b46ac460d97ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7db0c070dc8aa250ef2b46ac460d97ef, function (items) {
  if (mudfish_adclean_g_conf_7db0c070dc8aa250ef2b46ac460d97ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7db0c070dc8aa250ef2b46ac460d97ef();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7db0c070dc8aa250ef2b46ac460d97ef();
    });
  }
});
