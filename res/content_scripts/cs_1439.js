
function mudfish_adclean_4863265ab7f395a53e457b3a31d64923() {
  try {
    Sizzle(`.td_sub_read_contents div[style*="width:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4863265ab7f395a53e457b3a31d64923 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4863265ab7f395a53e457b3a31d64923, function (items) {
  if (mudfish_adclean_g_conf_4863265ab7f395a53e457b3a31d64923.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4863265ab7f395a53e457b3a31d64923();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
