
function mudfish_adclean_23035da74a886de3bf504d9a6f2d9506() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.article_area .article_left`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_23035da74a886de3bf504d9a6f2d9506();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_23035da74a886de3bf504d9a6f2d9506();
  });
}
