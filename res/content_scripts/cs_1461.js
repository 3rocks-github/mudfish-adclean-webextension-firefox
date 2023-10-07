
function mudfish_adclean_79a045a3061dc02d5caf5a0c8690e64e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container > div#rightContents > div[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_79a045a3061dc02d5caf5a0c8690e64e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_79a045a3061dc02d5caf5a0c8690e64e();
  });
}
