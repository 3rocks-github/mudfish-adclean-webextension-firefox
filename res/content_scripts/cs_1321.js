
function mudfish_adclean_99c51ef2d78ef9f84671bd45bdfb3b0f() {
  try {
    Sizzle(`#sidebar > div[data-version="2"]#Image5`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99c51ef2d78ef9f84671bd45bdfb3b0f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99c51ef2d78ef9f84671bd45bdfb3b0f, function (items) {
  if (mudfish_adclean_g_conf_99c51ef2d78ef9f84671bd45bdfb3b0f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99c51ef2d78ef9f84671bd45bdfb3b0f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
