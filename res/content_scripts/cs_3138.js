
function mudfish_adclean_e406e7be939cd83cb1467cdf20d450a3() {
  try {
    Sizzle(`div[class^="bnn_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e406e7be939cd83cb1467cdf20d450a3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e406e7be939cd83cb1467cdf20d450a3, function (items) {
  if (mudfish_adclean_g_conf_e406e7be939cd83cb1467cdf20d450a3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e406e7be939cd83cb1467cdf20d450a3();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
