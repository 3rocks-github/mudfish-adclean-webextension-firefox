
function mudfish_adclean_b72daee7eff1786f6a548a06ecd3c294() {
  try {
    Sizzle(`div[id^="lftwing"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b72daee7eff1786f6a548a06ecd3c294 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b72daee7eff1786f6a548a06ecd3c294, function (items) {
  if (mudfish_adclean_g_conf_b72daee7eff1786f6a548a06ecd3c294.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b72daee7eff1786f6a548a06ecd3c294();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b72daee7eff1786f6a548a06ecd3c294();
    });
  }
});
