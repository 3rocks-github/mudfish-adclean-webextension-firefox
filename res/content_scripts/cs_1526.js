
function mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56() {
  try {
    Sizzle(`body > div[class*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ee6e09faf8960ee3ac1d13381d6bad56 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ee6e09faf8960ee3ac1d13381d6bad56, function (items) {
  if (mudfish_adclean_g_conf_ee6e09faf8960ee3ac1d13381d6bad56.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ee6e09faf8960ee3ac1d13381d6bad56();
    });
  }
});
