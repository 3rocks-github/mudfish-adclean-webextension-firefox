
function mudfish_adclean_cea0bd0942b3a02333b12225f3300858() {
  try {
    Sizzle(`.ads-impression`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cea0bd0942b3a02333b12225f3300858 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cea0bd0942b3a02333b12225f3300858, function (items) {
  if (mudfish_adclean_g_conf_cea0bd0942b3a02333b12225f3300858.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cea0bd0942b3a02333b12225f3300858();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cea0bd0942b3a02333b12225f3300858();
    });
  }
});
