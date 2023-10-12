
function mudfish_adclean_13bdd0189179b94282b2ffc6d88e36c5() {
  try {
    Sizzle(`.widget_banner_skin > ul.banner_list`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_13bdd0189179b94282b2ffc6d88e36c5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_13bdd0189179b94282b2ffc6d88e36c5, function (items) {
  if (mudfish_adclean_g_conf_13bdd0189179b94282b2ffc6d88e36c5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_13bdd0189179b94282b2ffc6d88e36c5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
