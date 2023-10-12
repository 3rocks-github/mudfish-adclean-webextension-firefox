
function mudfish_adclean_2da15b13d21d013375c0ec3e5bd910e6() {
  try {
    Sizzle(`html[class*="pc-size"] .m-contents > .side-area > .analysis-ranking1`).forEach(element => {
      element.style.top = "475px !important";
element.style.left = "auto !important";
element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2da15b13d21d013375c0ec3e5bd910e6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2da15b13d21d013375c0ec3e5bd910e6, function (items) {
  if (mudfish_adclean_g_conf_2da15b13d21d013375c0ec3e5bd910e6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2da15b13d21d013375c0ec3e5bd910e6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
