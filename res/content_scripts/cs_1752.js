
function mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de() {
  try {
    Sizzle(`.side .login-box ~ .img-wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_efa45a6b8c22ed73d18f7a38f31363de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_efa45a6b8c22ed73d18f7a38f31363de, function (items) {
  if (mudfish_adclean_g_conf_efa45a6b8c22ed73d18f7a38f31363de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_efa45a6b8c22ed73d18f7a38f31363de();
    });
  }
});
