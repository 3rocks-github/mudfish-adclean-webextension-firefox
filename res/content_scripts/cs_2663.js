
function mudfish_adclean_6d543866f8090664a843c81f4745e590() {
  try {
    Sizzle(`.adsense-alt`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6d543866f8090664a843c81f4745e590 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6d543866f8090664a843c81f4745e590, function (items) {
  if (mudfish_adclean_g_conf_6d543866f8090664a843c81f4745e590.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6d543866f8090664a843c81f4745e590();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6d543866f8090664a843c81f4745e590();
    });
  }
});
