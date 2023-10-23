
function mudfish_adclean_d5d637ae209c739bcc1cea8758574ac4() {
  try {
    Sizzle(`div[id^="carousel_"] a[target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d5d637ae209c739bcc1cea8758574ac4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d5d637ae209c739bcc1cea8758574ac4, function (items) {
  if (mudfish_adclean_g_conf_d5d637ae209c739bcc1cea8758574ac4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d5d637ae209c739bcc1cea8758574ac4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d5d637ae209c739bcc1cea8758574ac4();
    });
  }
});
