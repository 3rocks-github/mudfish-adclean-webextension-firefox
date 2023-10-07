
function mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#Article > .Line_gray ~ div[style]:not([class]):not([id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f();
  });
}
