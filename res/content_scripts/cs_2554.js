
function mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`main#main .eq.section #bd table tr:has(.no ~ .title span:contains([AD]))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_466291feb1fcd12a69ebbf62504ba94e();
  });
}
