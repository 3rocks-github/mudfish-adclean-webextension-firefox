
function mudfish_adclean_f3173512628619fc7fb5d6583ced2764() {
  try {
    Sizzle(`div[id^="kakao_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f3173512628619fc7fb5d6583ced2764 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f3173512628619fc7fb5d6583ced2764, function (items) {
  if (mudfish_adclean_g_conf_f3173512628619fc7fb5d6583ced2764.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f3173512628619fc7fb5d6583ced2764();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f3173512628619fc7fb5d6583ced2764();
    });
  }
});
