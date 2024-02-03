
function mudfish_adclean_9a7ca66e61f3c6124d31d953ea38f425() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9a7ca66e61f3c6124d31d953ea38f425 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9a7ca66e61f3c6124d31d953ea38f425, function (items) {
  if (mudfish_adclean_g_conf_9a7ca66e61f3c6124d31d953ea38f425.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9a7ca66e61f3c6124d31d953ea38f425();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9a7ca66e61f3c6124d31d953ea38f425();
    });
  }
});
