
function mudfish_adclean_064df6ee1866092609bb53c728e028e2() {
  try {
    Sizzle(`div[style].clearfix > .nd-by-line`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_064df6ee1866092609bb53c728e028e2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_064df6ee1866092609bb53c728e028e2, function (items) {
  if (mudfish_adclean_g_conf_064df6ee1866092609bb53c728e028e2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_064df6ee1866092609bb53c728e028e2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_064df6ee1866092609bb53c728e028e2();
    });
  }
});
