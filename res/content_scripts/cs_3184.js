
function mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0() {
  try {
    Sizzle(`.ad-form > .row > div[class^="col-md-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0c8c9868c7156dea01e69a2c3c2903b0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0c8c9868c7156dea01e69a2c3c2903b0, function (items) {
  if (mudfish_adclean_g_conf_0c8c9868c7156dea01e69a2c3c2903b0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0c8c9868c7156dea01e69a2c3c2903b0();
    });
  }
});
