
function mudfish_adclean_0f433ca902e25e17051024d2459eda98() {
  try {
    Sizzle(`.gdl-left-sidebar`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f433ca902e25e17051024d2459eda98 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f433ca902e25e17051024d2459eda98, function (items) {
  if (mudfish_adclean_g_conf_0f433ca902e25e17051024d2459eda98.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f433ca902e25e17051024d2459eda98();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
