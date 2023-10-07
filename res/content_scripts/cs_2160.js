
function mudfish_adclean_fa288d683fdd622e88b2d0978f1461b5() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="https://torrentmode.com/bbs/bannerhit.php"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fa288d683fdd622e88b2d0978f1461b5();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fa288d683fdd622e88b2d0978f1461b5();
  });
}
