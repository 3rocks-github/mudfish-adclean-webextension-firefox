
function mudfish_adclean_00fed1830136827a6341c28ed409620f() {
  try {
    Sizzle(`.productDetailWrap > .contentsWrap`).forEach(element => {
      element.style.paddingBottom = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_00fed1830136827a6341c28ed409620f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_00fed1830136827a6341c28ed409620f, function (items) {
  if (mudfish_adclean_g_conf_00fed1830136827a6341c28ed409620f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_00fed1830136827a6341c28ed409620f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
