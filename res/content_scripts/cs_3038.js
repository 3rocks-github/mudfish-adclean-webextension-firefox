
function mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_2`).forEach(element => {
        element.style.width = "363px !important";
element.style.left = "363px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f();
  });
}
