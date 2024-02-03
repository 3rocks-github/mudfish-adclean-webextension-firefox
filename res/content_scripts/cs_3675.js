
function mudfish_adclean_c7baac657e4e68f31661bd445071d920() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c7baac657e4e68f31661bd445071d920 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c7baac657e4e68f31661bd445071d920, function (items) {
  if (mudfish_adclean_g_conf_c7baac657e4e68f31661bd445071d920.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c7baac657e4e68f31661bd445071d920();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c7baac657e4e68f31661bd445071d920();
    });
  }
});
