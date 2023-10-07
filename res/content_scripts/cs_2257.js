
function mudfish_adclean_61872d0b4277e9ef818327b77ae9f593() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.news_doc #footer`).forEach(element => {
        element.style.position = "static !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61872d0b4277e9ef818327b77ae9f593();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61872d0b4277e9ef818327b77ae9f593();
  });
}
