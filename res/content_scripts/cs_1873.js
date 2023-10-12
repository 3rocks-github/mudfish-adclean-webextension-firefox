
function mudfish_adclean_9731cb916581ff2dc74e446c3bf91877() {
  try {
    Sizzle(`.col-md-3.at-col.at-side > .row.fix-gutters-5`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9731cb916581ff2dc74e446c3bf91877 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9731cb916581ff2dc74e446c3bf91877, function (items) {
  if (mudfish_adclean_g_conf_9731cb916581ff2dc74e446c3bf91877.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9731cb916581ff2dc74e446c3bf91877();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
