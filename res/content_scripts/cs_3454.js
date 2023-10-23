
function mudfish_adclean_1ecd2eda1c45225b41e782265c6dd190() {
  try {
    Sizzle(`.text-center > a[onclick^="App.trackOutboundLink"]:has(> img[class^="visible-"][class$="-block"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1ecd2eda1c45225b41e782265c6dd190 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1ecd2eda1c45225b41e782265c6dd190, function (items) {
  if (mudfish_adclean_g_conf_1ecd2eda1c45225b41e782265c6dd190.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1ecd2eda1c45225b41e782265c6dd190();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1ecd2eda1c45225b41e782265c6dd190();
    });
  }
});
