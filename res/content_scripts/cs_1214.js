
function mudfish_adclean_c5a880cd478eb490a5a6e5de91c068a7() {
  try {
    Sizzle(`div[class^="deepdive_widget_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c5a880cd478eb490a5a6e5de91c068a7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c5a880cd478eb490a5a6e5de91c068a7, function (items) {
  if (mudfish_adclean_g_conf_c5a880cd478eb490a5a6e5de91c068a7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c5a880cd478eb490a5a6e5de91c068a7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
