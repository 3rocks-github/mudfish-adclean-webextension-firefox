
function mudfish_adclean_0486e096459493c2f5ef2f83588e00ec() {
  try {
    Sizzle(`.leftad2`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0486e096459493c2f5ef2f83588e00ec = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0486e096459493c2f5ef2f83588e00ec, function (items) {
  if (mudfish_adclean_g_conf_0486e096459493c2f5ef2f83588e00ec.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0486e096459493c2f5ef2f83588e00ec();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
