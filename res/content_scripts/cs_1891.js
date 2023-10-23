
function mudfish_adclean_fdedf7956458b55afd30b493e07af4b4() {
  try {
    Sizzle(`main.app-main > .app-layout-container > .app-layout-content > #app-board > div > div[style]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fdedf7956458b55afd30b493e07af4b4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fdedf7956458b55afd30b493e07af4b4, function (items) {
  if (mudfish_adclean_g_conf_fdedf7956458b55afd30b493e07af4b4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fdedf7956458b55afd30b493e07af4b4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fdedf7956458b55afd30b493e07af4b4();
    });
  }
});
