
function mudfish_adclean_79d0117b2f76fbed108b23e660fc20b6() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_79d0117b2f76fbed108b23e660fc20b6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_79d0117b2f76fbed108b23e660fc20b6, function (items) {
  if (mudfish_adclean_g_conf_79d0117b2f76fbed108b23e660fc20b6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_79d0117b2f76fbed108b23e660fc20b6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_79d0117b2f76fbed108b23e660fc20b6();
    });
  }
});
