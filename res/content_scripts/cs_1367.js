
function mudfish_adclean_b1ffee6fccb533f86df76c45c2278e85() {
  try {
    Sizzle(`#viewWrapDiv > div[style*=" "]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b1ffee6fccb533f86df76c45c2278e85 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b1ffee6fccb533f86df76c45c2278e85, function (items) {
  if (mudfish_adclean_g_conf_b1ffee6fccb533f86df76c45c2278e85.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b1ffee6fccb533f86df76c45c2278e85();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
