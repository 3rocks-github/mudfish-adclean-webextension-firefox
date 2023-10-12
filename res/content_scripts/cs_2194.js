
function mudfish_adclean_56a26ad354c76eb234d8eeb417896639() {
  try {
    Sizzle(`.ad_item`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_56a26ad354c76eb234d8eeb417896639 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_56a26ad354c76eb234d8eeb417896639, function (items) {
  if (mudfish_adclean_g_conf_56a26ad354c76eb234d8eeb417896639.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_56a26ad354c76eb234d8eeb417896639();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
