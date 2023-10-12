
function mudfish_adclean_79d8cf387beb38b536162f5b4f1595af() {
  try {
    Sizzle(`div[id$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_79d8cf387beb38b536162f5b4f1595af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_79d8cf387beb38b536162f5b4f1595af, function (items) {
  if (mudfish_adclean_g_conf_79d8cf387beb38b536162f5b4f1595af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_79d8cf387beb38b536162f5b4f1595af();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
