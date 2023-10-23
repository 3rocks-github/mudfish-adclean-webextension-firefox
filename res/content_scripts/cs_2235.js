
function mudfish_adclean_1a43323660d01ef783722675086849dd() {
  try {
    Sizzle(`div[class^="main"]#middle_area .academy.fleft:not(.iyua)`).forEach(element => {
      element.style.marginLeft = "calc(11.5%) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1a43323660d01ef783722675086849dd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1a43323660d01ef783722675086849dd, function (items) {
  if (mudfish_adclean_g_conf_1a43323660d01ef783722675086849dd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1a43323660d01ef783722675086849dd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1a43323660d01ef783722675086849dd();
    });
  }
});
