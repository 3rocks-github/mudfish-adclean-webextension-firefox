
function mudfish_adclean_07c14786e771d8b65d11de8fcfccd6cb() {
  try {
    Sizzle(`section[itemprop="articleBody"] > .arcad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07c14786e771d8b65d11de8fcfccd6cb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07c14786e771d8b65d11de8fcfccd6cb, function (items) {
  if (mudfish_adclean_g_conf_07c14786e771d8b65d11de8fcfccd6cb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07c14786e771d8b65d11de8fcfccd6cb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_07c14786e771d8b65d11de8fcfccd6cb();
    });
  }
});
