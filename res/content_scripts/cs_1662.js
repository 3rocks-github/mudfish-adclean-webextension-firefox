
function mudfish_adclean_4e290fc7a51bf1410c1823d24898c877() {
  try {
    Sizzle(`#container.atcpage div[style]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4e290fc7a51bf1410c1823d24898c877 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4e290fc7a51bf1410c1823d24898c877, function (items) {
  if (mudfish_adclean_g_conf_4e290fc7a51bf1410c1823d24898c877.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4e290fc7a51bf1410c1823d24898c877();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
