
function mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body .contents .container .topSub-nav`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_270a5d19c2ac67ce25f1d45fddbda0c2();
  });
}
