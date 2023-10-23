
function mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013() {
  try {
    Sizzle(`#popUP_ZONE`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0b2d5f1d3fd47ac6b08ccb5347d06013 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0b2d5f1d3fd47ac6b08ccb5347d06013, function (items) {
  if (mudfish_adclean_g_conf_0b2d5f1d3fd47ac6b08ccb5347d06013.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0b2d5f1d3fd47ac6b08ccb5347d06013();
    });
  }
});
