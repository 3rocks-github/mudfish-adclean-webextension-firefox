
function mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul.post-list > li[class^="post-"]:not([id]):not([data-post-id])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7();
  });
}
