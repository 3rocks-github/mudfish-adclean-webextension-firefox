
function mudfish_adclean_46126e381f6bc49f7b7110e4a58f7714() {
  try {
    Sizzle(`img[src^="/tokinbtoki/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46126e381f6bc49f7b7110e4a58f7714 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46126e381f6bc49f7b7110e4a58f7714, function (items) {
  if (mudfish_adclean_g_conf_46126e381f6bc49f7b7110e4a58f7714.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46126e381f6bc49f7b7110e4a58f7714();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_46126e381f6bc49f7b7110e4a58f7714();
    });
  }
});
