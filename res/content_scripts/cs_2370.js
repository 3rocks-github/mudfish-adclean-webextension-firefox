
function mudfish_adclean_566185f3cdcc56c1264a363e1853aef1() {
  try {
    Sizzle(`.goods_list_tit`).forEach(element => {
      element.style.paddingTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_566185f3cdcc56c1264a363e1853aef1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_566185f3cdcc56c1264a363e1853aef1, function (items) {
  if (mudfish_adclean_g_conf_566185f3cdcc56c1264a363e1853aef1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_566185f3cdcc56c1264a363e1853aef1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
