
function mudfish_adclean_153d271634604304134dd12bfba529e8() {
  try {
    Sizzle(`.mwcphideBtn`).forEach(element => {
      element.style.display = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_153d271634604304134dd12bfba529e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_153d271634604304134dd12bfba529e8, function (items) {
  if (mudfish_adclean_g_conf_153d271634604304134dd12bfba529e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_153d271634604304134dd12bfba529e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
