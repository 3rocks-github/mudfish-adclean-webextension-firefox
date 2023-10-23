
function mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca() {
  try {
    Sizzle(`.primiumList`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6ed32ed993c0a36a718e2aefe057a6ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6ed32ed993c0a36a718e2aefe057a6ca, function (items) {
  if (mudfish_adclean_g_conf_6ed32ed993c0a36a718e2aefe057a6ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6ed32ed993c0a36a718e2aefe057a6ca();
    });
  }
});
