
function mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c() {
  try {
    Sizzle(`.app-layout-content > #app-board > .app-board-section > .app-board-container > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46c3f93c6adcea8cb4b95a3e450a6f3c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46c3f93c6adcea8cb4b95a3e450a6f3c, function (items) {
  if (mudfish_adclean_g_conf_46c3f93c6adcea8cb4b95a3e450a6f3c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_46c3f93c6adcea8cb4b95a3e450a6f3c();
    });
  }
});
