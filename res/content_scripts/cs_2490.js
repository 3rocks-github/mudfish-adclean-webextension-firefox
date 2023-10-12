
function mudfish_adclean_bf132679270ac4017be9128904aecfe9() {
  try {
    Sizzle(`.popular-news-widget:has(> *:matches-css(display: none))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bf132679270ac4017be9128904aecfe9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bf132679270ac4017be9128904aecfe9, function (items) {
  if (mudfish_adclean_g_conf_bf132679270ac4017be9128904aecfe9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bf132679270ac4017be9128904aecfe9();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
