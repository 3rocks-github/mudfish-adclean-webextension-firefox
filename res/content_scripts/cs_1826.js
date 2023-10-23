
function mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5() {
  try {
    Sizzle(`img[src*="://thumb.toomics.com/upload/banner/"]:not([src*="/main/"]):not([src*="/cut/"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a81d409fa98b1641d016f6dd1a704d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a81d409fa98b1641d016f6dd1a704d5, function (items) {
  if (mudfish_adclean_g_conf_2a81d409fa98b1641d016f6dd1a704d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2a81d409fa98b1641d016f6dd1a704d5();
    });
  }
});
