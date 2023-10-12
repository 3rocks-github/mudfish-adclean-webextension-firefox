
function mudfish_adclean_5d2e7f4bd85e1de6a27650160bad6bdc() {
  try {
    Sizzle(`.board_view .related_content > ul > a`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5d2e7f4bd85e1de6a27650160bad6bdc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5d2e7f4bd85e1de6a27650160bad6bdc, function (items) {
  if (mudfish_adclean_g_conf_5d2e7f4bd85e1de6a27650160bad6bdc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5d2e7f4bd85e1de6a27650160bad6bdc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
