
function mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34() {
  try {
    Sizzle(`#root div[class^="Layout-module__content_"]:has(iframe[src^="https://shopsquare.naver.com/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a2bf0a2d55b6191cd0a2a5cd9165dc34 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a2bf0a2d55b6191cd0a2a5cd9165dc34, function (items) {
  if (mudfish_adclean_g_conf_a2bf0a2d55b6191cd0a2a5cd9165dc34.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a2bf0a2d55b6191cd0a2a5cd9165dc34();
    });
  }
});
