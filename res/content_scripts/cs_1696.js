
function mudfish_adclean_a7311d033a153fd33809ebe7d8852de8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > .article > div[class][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a7311d033a153fd33809ebe7d8852de8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a7311d033a153fd33809ebe7d8852de8();
  });
}
