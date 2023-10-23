
function mudfish_adclean_e3b7c98180b601eeb941dba7fce3b812() {
  try {
    Sizzle(`.body > .content.xe_content:not(:has(article))`).forEach(element => {
      element.style.width = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e3b7c98180b601eeb941dba7fce3b812 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e3b7c98180b601eeb941dba7fce3b812, function (items) {
  if (mudfish_adclean_g_conf_e3b7c98180b601eeb941dba7fce3b812.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e3b7c98180b601eeb941dba7fce3b812();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e3b7c98180b601eeb941dba7fce3b812();
    });
  }
});
