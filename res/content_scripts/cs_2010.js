
function mudfish_adclean_c2885daddfa069e98bec627746206213() {
  try {
    Sizzle(`div[id^="foin_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c2885daddfa069e98bec627746206213 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c2885daddfa069e98bec627746206213, function (items) {
  if (mudfish_adclean_g_conf_c2885daddfa069e98bec627746206213.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c2885daddfa069e98bec627746206213();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c2885daddfa069e98bec627746206213();
    });
  }
});
