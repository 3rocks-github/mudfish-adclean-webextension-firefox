
function mudfish_adclean_a23e67c36421c9a3ad50863c0b4f89f3() {
  try {
    Sizzle(`div[class*="_bn_"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a23e67c36421c9a3ad50863c0b4f89f3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a23e67c36421c9a3ad50863c0b4f89f3, function (items) {
  if (mudfish_adclean_g_conf_a23e67c36421c9a3ad50863c0b4f89f3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a23e67c36421c9a3ad50863c0b4f89f3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a23e67c36421c9a3ad50863c0b4f89f3();
    });
  }
});
