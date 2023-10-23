
function mudfish_adclean_53e286619df6cc9bd9e4ef3b59a0f8a4() {
  try {
    Sizzle(`[id^="flex_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_53e286619df6cc9bd9e4ef3b59a0f8a4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_53e286619df6cc9bd9e4ef3b59a0f8a4, function (items) {
  if (mudfish_adclean_g_conf_53e286619df6cc9bd9e4ef3b59a0f8a4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_53e286619df6cc9bd9e4ef3b59a0f8a4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_53e286619df6cc9bd9e4ef3b59a0f8a4();
    });
  }
});
