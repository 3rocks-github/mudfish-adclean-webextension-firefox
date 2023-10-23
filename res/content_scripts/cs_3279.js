
function mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33() {
  try {
    Sizzle(`table.bd_list tr:has(a[href^="/board/ad/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aafdd9a067c3130ce83ac5cf3880dc33 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aafdd9a067c3130ce83ac5cf3880dc33, function (items) {
  if (mudfish_adclean_g_conf_aafdd9a067c3130ce83ac5cf3880dc33.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_aafdd9a067c3130ce83ac5cf3880dc33();
    });
  }
});
