
function mudfish_adclean_e5c66bcd4ecb8806eb6951f2cc5b9352() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`aticle div[style]:not([id]):not([class]):not([itemprop])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e5c66bcd4ecb8806eb6951f2cc5b9352();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e5c66bcd4ecb8806eb6951f2cc5b9352();
  });
}
