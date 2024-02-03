
function mudfish_adclean_478cfe8aa83ff79c3e092edd97790003() {
  try {
    Sizzle(`.inner-body.hided .partners-inside`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_478cfe8aa83ff79c3e092edd97790003 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_478cfe8aa83ff79c3e092edd97790003, function (items) {
  if (mudfish_adclean_g_conf_478cfe8aa83ff79c3e092edd97790003.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_478cfe8aa83ff79c3e092edd97790003();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_478cfe8aa83ff79c3e092edd97790003();
    });
  }
});
