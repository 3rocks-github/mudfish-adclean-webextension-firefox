
function mudfish_adclean_55a3613608937a90bdc658f07c75c11c() {
  try {
    Sizzle(`.StoryBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_55a3613608937a90bdc658f07c75c11c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_55a3613608937a90bdc658f07c75c11c, function (items) {
  if (mudfish_adclean_g_conf_55a3613608937a90bdc658f07c75c11c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_55a3613608937a90bdc658f07c75c11c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_55a3613608937a90bdc658f07c75c11c();
    });
  }
});
