
function mudfish_adclean_1433acff43d3fa47186895db2cfd95de() {
  try {
    Sizzle(`.bFloatingBanner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1433acff43d3fa47186895db2cfd95de = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1433acff43d3fa47186895db2cfd95de, function (items) {
  if (mudfish_adclean_g_conf_1433acff43d3fa47186895db2cfd95de.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1433acff43d3fa47186895db2cfd95de();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
