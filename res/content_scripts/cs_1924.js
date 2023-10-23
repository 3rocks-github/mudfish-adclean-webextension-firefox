
function mudfish_adclean_574b5de9697295aebce2eec8cf93ee32() {
  try {
    Sizzle(`#pnlContainer > div[class^="ct"] > .con_b > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_574b5de9697295aebce2eec8cf93ee32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_574b5de9697295aebce2eec8cf93ee32, function (items) {
  if (mudfish_adclean_g_conf_574b5de9697295aebce2eec8cf93ee32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_574b5de9697295aebce2eec8cf93ee32();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_574b5de9697295aebce2eec8cf93ee32();
    });
  }
});
