
function mudfish_adclean_f78342bec5586b8d9d93e133b02d293c() {
  try {
    Sizzle(`.container div[style^="height:"].mx-auto`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f78342bec5586b8d9d93e133b02d293c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f78342bec5586b8d9d93e133b02d293c, function (items) {
  if (mudfish_adclean_g_conf_f78342bec5586b8d9d93e133b02d293c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f78342bec5586b8d9d93e133b02d293c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f78342bec5586b8d9d93e133b02d293c();
    });
  }
});
