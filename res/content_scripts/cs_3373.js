
function mudfish_adclean_a95e57375c385c03743aefecf725de47() {
  try {
    Sizzle(`[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a95e57375c385c03743aefecf725de47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a95e57375c385c03743aefecf725de47, function (items) {
  if (mudfish_adclean_g_conf_a95e57375c385c03743aefecf725de47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a95e57375c385c03743aefecf725de47();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a95e57375c385c03743aefecf725de47();
    });
  }
});
