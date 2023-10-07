
function mudfish_adclean_01e101a087d10ecfd79a0a4053d1b191() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#contentsBox #login_box`).forEach(element => {
        element.style.width = "350px !important";
element.style.float = "right !important";
element.style.borderBottom = "solid 2px #da3b40 !important";
element.style.borderLeft = "solid 2px #da3b40 !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_01e101a087d10ecfd79a0a4053d1b191();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_01e101a087d10ecfd79a0a4053d1b191();
  });
}
