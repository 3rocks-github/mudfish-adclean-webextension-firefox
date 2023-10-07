
function mudfish_adclean_ab86486a37c620cb1bb8285ce7045b68() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.news-cate + .news-box`).forEach(element => {
        element.style.paddingRight = "0px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ab86486a37c620cb1bb8285ce7045b68();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ab86486a37c620cb1bb8285ce7045b68();
  });
}
