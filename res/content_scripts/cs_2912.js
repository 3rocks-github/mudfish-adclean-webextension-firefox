
function mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511() {
  try {
    Sizzle(`#mdnw-main-recommend-realCuration-swipeContainer > div[id*="-ad-"]`).forEach(element => {
      element.style.remove = "true";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e00ba799885cc1b23376d9ac06a0c511 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e00ba799885cc1b23376d9ac06a0c511, function (items) {
  if (mudfish_adclean_g_conf_e00ba799885cc1b23376d9ac06a0c511.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e00ba799885cc1b23376d9ac06a0c511();
    });
  }
});
