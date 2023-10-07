
function mudfish_adclean_00fed1830136827a6341c28ed409620f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.productDetailWrap > .contentsWrap`).forEach(element => {
        element.style.paddingBottom = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_00fed1830136827a6341c28ed409620f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_00fed1830136827a6341c28ed409620f();
  });
}
