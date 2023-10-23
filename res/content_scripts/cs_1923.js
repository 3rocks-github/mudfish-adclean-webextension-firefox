
function mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44() {
  try {
    Sizzle(`div[class^="ct"] > .section > .view_box > #divViewBox > .viewbox > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_11c8725e3fd9aad20a96737c6cdc5c44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_11c8725e3fd9aad20a96737c6cdc5c44, function (items) {
  if (mudfish_adclean_g_conf_11c8725e3fd9aad20a96737c6cdc5c44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_11c8725e3fd9aad20a96737c6cdc5c44();
    });
  }
});
