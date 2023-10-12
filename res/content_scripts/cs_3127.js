
function mudfish_adclean_4768e3b49899aeb000ef3f75ff6a41c1() {
  try {
    Sizzle(`#contentArea > div[style^="width:"][id]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4768e3b49899aeb000ef3f75ff6a41c1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4768e3b49899aeb000ef3f75ff6a41c1, function (items) {
  if (mudfish_adclean_g_conf_4768e3b49899aeb000ef3f75ff6a41c1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4768e3b49899aeb000ef3f75ff6a41c1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
