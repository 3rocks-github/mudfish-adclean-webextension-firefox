
function mudfish_adclean_fcca3a4b06b87933a715cd8d357e83d3() {
  try {
    Sizzle(`.inner-body.hided`).forEach(element => {
      element.style.overflowY = "auto !important";
element.style.maxHeight = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fcca3a4b06b87933a715cd8d357e83d3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fcca3a4b06b87933a715cd8d357e83d3, function (items) {
  if (mudfish_adclean_g_conf_fcca3a4b06b87933a715cd8d357e83d3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fcca3a4b06b87933a715cd8d357e83d3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fcca3a4b06b87933a715cd8d357e83d3();
    });
  }
});
