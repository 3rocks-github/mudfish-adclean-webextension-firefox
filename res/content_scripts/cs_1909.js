
function mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62() {
  try {
    Sizzle(`.aside_g.aside_shopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0b661bb89a96dbcad7825332cf3c8d62 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0b661bb89a96dbcad7825332cf3c8d62, function (items) {
  if (mudfish_adclean_g_conf_0b661bb89a96dbcad7825332cf3c8d62.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0b661bb89a96dbcad7825332cf3c8d62();
    });
  }
});
