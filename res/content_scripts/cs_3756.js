
function mudfish_adclean_9b5c9c72f62d2dfcf2f80daa7e5b3b68() {
  try {
    Sizzle(`.popup_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b5c9c72f62d2dfcf2f80daa7e5b3b68 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b5c9c72f62d2dfcf2f80daa7e5b3b68, function (items) {
  if (mudfish_adclean_g_conf_9b5c9c72f62d2dfcf2f80daa7e5b3b68.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b5c9c72f62d2dfcf2f80daa7e5b3b68();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9b5c9c72f62d2dfcf2f80daa7e5b3b68();
    });
  }
});
