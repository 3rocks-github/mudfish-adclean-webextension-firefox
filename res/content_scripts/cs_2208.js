
function mudfish_adclean_809cdcb097867cb74705ff9980a6ed2d() {
  try {
    Sizzle(`.content_more_div > .cmd_block_layer`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_809cdcb097867cb74705ff9980a6ed2d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_809cdcb097867cb74705ff9980a6ed2d, function (items) {
  if (mudfish_adclean_g_conf_809cdcb097867cb74705ff9980a6ed2d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_809cdcb097867cb74705ff9980a6ed2d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_809cdcb097867cb74705ff9980a6ed2d();
    });
  }
});
