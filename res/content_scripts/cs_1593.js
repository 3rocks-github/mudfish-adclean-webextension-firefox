
function mudfish_adclean_fa53c7dc52d336a8c22327fc485dfd09() {
  try {
    Sizzle(`td[id^="divBn_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fa53c7dc52d336a8c22327fc485dfd09 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fa53c7dc52d336a8c22327fc485dfd09, function (items) {
  if (mudfish_adclean_g_conf_fa53c7dc52d336a8c22327fc485dfd09.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fa53c7dc52d336a8c22327fc485dfd09();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
