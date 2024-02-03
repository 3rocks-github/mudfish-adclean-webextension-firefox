
function mudfish_adclean_3268a2655cefe917010622ece852df4c() {
  try {
    Sizzle(`#hi-notice`).forEach(element => {
      element.style.height = "1px !important";
element.style.visibility = "hidden !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3268a2655cefe917010622ece852df4c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3268a2655cefe917010622ece852df4c, function (items) {
  if (mudfish_adclean_g_conf_3268a2655cefe917010622ece852df4c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3268a2655cefe917010622ece852df4c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3268a2655cefe917010622ece852df4c();
    });
  }
});
