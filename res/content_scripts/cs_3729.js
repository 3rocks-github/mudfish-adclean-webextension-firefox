
function mudfish_adclean_9f83346b144b86a016c118f479a98638() {
  try {
    Sizzle(`iframe[src*="//nad.newdaily.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9f83346b144b86a016c118f479a98638 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9f83346b144b86a016c118f479a98638, function (items) {
  if (mudfish_adclean_g_conf_9f83346b144b86a016c118f479a98638.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9f83346b144b86a016c118f479a98638();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9f83346b144b86a016c118f479a98638();
    });
  }
});
