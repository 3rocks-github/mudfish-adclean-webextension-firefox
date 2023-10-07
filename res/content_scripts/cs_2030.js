
function mudfish_adclean_097b44216ea60e5014307fc7e08efeb2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[data-postid].ultp-shortcode`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_097b44216ea60e5014307fc7e08efeb2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_097b44216ea60e5014307fc7e08efeb2();
  });
}
