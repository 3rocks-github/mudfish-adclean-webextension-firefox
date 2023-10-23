
function mudfish_adclean_9616e63db31b92627cc821781c2d2a2a() {
  try {
    Sizzle(`iframe[src*="//io1.innorame.com/"] + .bk40`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9616e63db31b92627cc821781c2d2a2a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9616e63db31b92627cc821781c2d2a2a, function (items) {
  if (mudfish_adclean_g_conf_9616e63db31b92627cc821781c2d2a2a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9616e63db31b92627cc821781c2d2a2a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9616e63db31b92627cc821781c2d2a2a();
    });
  }
});
