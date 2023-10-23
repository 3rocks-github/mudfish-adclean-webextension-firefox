
function mudfish_adclean_6a30f37bef778c6929f1deec10d3a200() {
  try {
    Sizzle(`div[class*="banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a30f37bef778c6929f1deec10d3a200 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a30f37bef778c6929f1deec10d3a200, function (items) {
  if (mudfish_adclean_g_conf_6a30f37bef778c6929f1deec10d3a200.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a30f37bef778c6929f1deec10d3a200();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6a30f37bef778c6929f1deec10d3a200();
    });
  }
});
