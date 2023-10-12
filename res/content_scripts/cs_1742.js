
function mudfish_adclean_1c85bfff3defcd8dcbf1721a5191a877() {
  try {
    Sizzle(`.la`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1c85bfff3defcd8dcbf1721a5191a877 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1c85bfff3defcd8dcbf1721a5191a877, function (items) {
  if (mudfish_adclean_g_conf_1c85bfff3defcd8dcbf1721a5191a877.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1c85bfff3defcd8dcbf1721a5191a877();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
