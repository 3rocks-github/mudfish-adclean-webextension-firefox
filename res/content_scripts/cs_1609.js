
function mudfish_adclean_9b25b9b8272d049ac289f51217f95f4b() {
  try {
    Sizzle(`.user-content > .user-aside`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b25b9b8272d049ac289f51217f95f4b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b25b9b8272d049ac289f51217f95f4b, function (items) {
  if (mudfish_adclean_g_conf_9b25b9b8272d049ac289f51217f95f4b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b25b9b8272d049ac289f51217f95f4b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
