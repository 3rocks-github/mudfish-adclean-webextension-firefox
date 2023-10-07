
function mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aside > article ~ div[style*="height:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2b0e8ff70ffff0783715b86caca269ee();
  });
}
