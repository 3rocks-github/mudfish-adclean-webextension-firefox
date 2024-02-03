
function mudfish_adclean_922ce14e39adf487fba747413bfb46d0() {
  try {
    Sizzle(`aside > div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_922ce14e39adf487fba747413bfb46d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_922ce14e39adf487fba747413bfb46d0, function (items) {
  if (mudfish_adclean_g_conf_922ce14e39adf487fba747413bfb46d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_922ce14e39adf487fba747413bfb46d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_922ce14e39adf487fba747413bfb46d0();
    });
  }
});
