
function mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f() {
  try {
    Sizzle(`.articleView div[class^="botBox"]:not(.twinBox)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7823e8b33cbafb9d23c7cd881e30366f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7823e8b33cbafb9d23c7cd881e30366f, function (items) {
  if (mudfish_adclean_g_conf_7823e8b33cbafb9d23c7cd881e30366f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7823e8b33cbafb9d23c7cd881e30366f();
    });
  }
});
