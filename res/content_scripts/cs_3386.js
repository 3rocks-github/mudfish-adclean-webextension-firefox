
function mudfish_adclean_92b53dd5247ee5786d849ea9580e2a8c() {
  try {
    Sizzle(`#wrap > div[style*="height:"][style^="position:"] + header`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_92b53dd5247ee5786d849ea9580e2a8c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_92b53dd5247ee5786d849ea9580e2a8c, function (items) {
  if (mudfish_adclean_g_conf_92b53dd5247ee5786d849ea9580e2a8c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_92b53dd5247ee5786d849ea9580e2a8c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_92b53dd5247ee5786d849ea9580e2a8c();
    });
  }
});
