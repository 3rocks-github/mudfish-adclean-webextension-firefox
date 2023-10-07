
function mudfish_adclean_417454bd66794187afce4ca9725ad574() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="_bnr"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_417454bd66794187afce4ca9725ad574();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_417454bd66794187afce4ca9725ad574();
  });
}
