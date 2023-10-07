
function mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.sub_article > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9288f6e4119b80c21f5311c4da2a497f();
  });
}
