
function mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46() {
  try {
    Sizzle(`.wrap_body .clearBoth ~ div[class^="margin_bottom"]:not(:has(+ *))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6fb27dcabc02d901fb6f9ba81a040d46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6fb27dcabc02d901fb6f9ba81a040d46, function (items) {
  if (mudfish_adclean_g_conf_6fb27dcabc02d901fb6f9ba81a040d46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6fb27dcabc02d901fb6f9ba81a040d46();
    });
  }
});
