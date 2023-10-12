
function mudfish_adclean_95fedb3341d244c1e7f33a2c7b9cdd78() {
  try {
    Sizzle(`.text-center > a[onclick^="App.trackOutboundLink"]:has(> img[src^="https://upload.acmicpc.net"][class^="visible-"][class$="-block"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_95fedb3341d244c1e7f33a2c7b9cdd78 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_95fedb3341d244c1e7f33a2c7b9cdd78, function (items) {
  if (mudfish_adclean_g_conf_95fedb3341d244c1e7f33a2c7b9cdd78.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_95fedb3341d244c1e7f33a2c7b9cdd78();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
