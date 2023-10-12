
function mudfish_adclean_d8bbe638a03572cd88db5b9678a2b89b() {
  try {
    Sizzle(`.column_content`).forEach(element => {
      element.style.marginTop = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d8bbe638a03572cd88db5b9678a2b89b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d8bbe638a03572cd88db5b9678a2b89b, function (items) {
  if (mudfish_adclean_g_conf_d8bbe638a03572cd88db5b9678a2b89b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d8bbe638a03572cd88db5b9678a2b89b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
