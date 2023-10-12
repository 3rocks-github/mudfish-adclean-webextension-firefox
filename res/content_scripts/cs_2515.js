
function mudfish_adclean_4f1db8e5dc91b3bb72fe2f14dd583667() {
  try {
    Sizzle(`aside div[class][id] > div[id]:not([class]):not(:has(> *))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4f1db8e5dc91b3bb72fe2f14dd583667 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4f1db8e5dc91b3bb72fe2f14dd583667, function (items) {
  if (mudfish_adclean_g_conf_4f1db8e5dc91b3bb72fe2f14dd583667.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4f1db8e5dc91b3bb72fe2f14dd583667();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
