
function mudfish_adclean_17dbdd9d6e2c364399a6fbb5da819b34() {
  try {
    Sizzle(`div[class*="_banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_17dbdd9d6e2c364399a6fbb5da819b34 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_17dbdd9d6e2c364399a6fbb5da819b34, function (items) {
  if (mudfish_adclean_g_conf_17dbdd9d6e2c364399a6fbb5da819b34.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_17dbdd9d6e2c364399a6fbb5da819b34();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_17dbdd9d6e2c364399a6fbb5da819b34();
    });
  }
});
