
function mudfish_adclean_04e5849fbe5b711c435b7b0607b22772() {
  try {
    Sizzle(`.container > div[style][id^="slider"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_04e5849fbe5b711c435b7b0607b22772 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_04e5849fbe5b711c435b7b0607b22772, function (items) {
  if (mudfish_adclean_g_conf_04e5849fbe5b711c435b7b0607b22772.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_04e5849fbe5b711c435b7b0607b22772();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_04e5849fbe5b711c435b7b0607b22772();
    });
  }
});
