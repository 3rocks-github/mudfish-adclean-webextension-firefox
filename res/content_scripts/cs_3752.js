
function mudfish_adclean_a2cdc6ac1941787d7dea721c0a590a5f() {
  try {
    Sizzle(`div[id$="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a2cdc6ac1941787d7dea721c0a590a5f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a2cdc6ac1941787d7dea721c0a590a5f, function (items) {
  if (mudfish_adclean_g_conf_a2cdc6ac1941787d7dea721c0a590a5f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a2cdc6ac1941787d7dea721c0a590a5f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a2cdc6ac1941787d7dea721c0a590a5f();
    });
  }
});
