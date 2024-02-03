
function mudfish_adclean_124581734d0fe608c3f392eedb0669ef() {
  try {
    Sizzle(`div[style].border-shadow`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_124581734d0fe608c3f392eedb0669ef = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_124581734d0fe608c3f392eedb0669ef, function (items) {
  if (mudfish_adclean_g_conf_124581734d0fe608c3f392eedb0669ef.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_124581734d0fe608c3f392eedb0669ef();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_124581734d0fe608c3f392eedb0669ef();
    });
  }
});
