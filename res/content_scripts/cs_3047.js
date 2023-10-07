
function mudfish_adclean_ae9af8f6ffb4bd66a37d90b13c07889f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.one_line_article > ul.list > li.item:not(:has(a[href^="/article.html?no="]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_ae9af8f6ffb4bd66a37d90b13c07889f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_ae9af8f6ffb4bd66a37d90b13c07889f();
  });
}
