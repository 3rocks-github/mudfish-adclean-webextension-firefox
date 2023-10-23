
function mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2() {
  try {
    Sizzle(`.wrap > div[style$="height:100px;"]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1512ad5d7e628dee01caadfb04c31bd2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1512ad5d7e628dee01caadfb04c31bd2, function (items) {
  if (mudfish_adclean_g_conf_1512ad5d7e628dee01caadfb04c31bd2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1512ad5d7e628dee01caadfb04c31bd2();
    });
  }
});
