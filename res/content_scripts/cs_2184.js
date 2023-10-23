
function mudfish_adclean_0209498419427740ed783e01bd2c194f() {
  try {
    Sizzle(`iframe[width="100%"][height="90"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0209498419427740ed783e01bd2c194f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0209498419427740ed783e01bd2c194f, function (items) {
  if (mudfish_adclean_g_conf_0209498419427740ed783e01bd2c194f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0209498419427740ed783e01bd2c194f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0209498419427740ed783e01bd2c194f();
    });
  }
});
