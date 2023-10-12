
function mudfish_adclean_8415b1d7c63a779910f662fa8caf7007() {
  try {
    Sizzle(`.row > div[style=""].col-xs-12 ~ div[id] + div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8415b1d7c63a779910f662fa8caf7007 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8415b1d7c63a779910f662fa8caf7007, function (items) {
  if (mudfish_adclean_g_conf_8415b1d7c63a779910f662fa8caf7007.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8415b1d7c63a779910f662fa8caf7007();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
