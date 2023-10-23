
function mudfish_adclean_90736feb3173975362a559cc9fbcf4ca() {
  try {
    Sizzle(`#bo_ad`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_90736feb3173975362a559cc9fbcf4ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_90736feb3173975362a559cc9fbcf4ca, function (items) {
  if (mudfish_adclean_g_conf_90736feb3173975362a559cc9fbcf4ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_90736feb3173975362a559cc9fbcf4ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_90736feb3173975362a559cc9fbcf4ca();
    });
  }
});
