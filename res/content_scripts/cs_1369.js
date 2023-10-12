
function mudfish_adclean_cbb5197b53c7457091d6216c34485ad4() {
  try {
    Sizzle(`div[class^="adv-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cbb5197b53c7457091d6216c34485ad4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cbb5197b53c7457091d6216c34485ad4, function (items) {
  if (mudfish_adclean_g_conf_cbb5197b53c7457091d6216c34485ad4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cbb5197b53c7457091d6216c34485ad4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
