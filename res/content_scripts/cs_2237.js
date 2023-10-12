
function mudfish_adclean_a39b42c140786817e820965d1b801a06() {
  try {
    Sizzle(`.go_top.go_button`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a39b42c140786817e820965d1b801a06 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a39b42c140786817e820965d1b801a06, function (items) {
  if (mudfish_adclean_g_conf_a39b42c140786817e820965d1b801a06.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a39b42c140786817e820965d1b801a06();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
