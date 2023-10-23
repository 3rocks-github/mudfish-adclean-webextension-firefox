
function mudfish_adclean_41560151b5916523ea7892bfdb07c77d() {
  try {
    Sizzle(`.side-event-img`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_41560151b5916523ea7892bfdb07c77d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_41560151b5916523ea7892bfdb07c77d, function (items) {
  if (mudfish_adclean_g_conf_41560151b5916523ea7892bfdb07c77d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_41560151b5916523ea7892bfdb07c77d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_41560151b5916523ea7892bfdb07c77d();
    });
  }
});
