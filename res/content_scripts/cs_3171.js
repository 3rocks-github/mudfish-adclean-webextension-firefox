
function mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.panel-default ~ .row > .col-sm-6`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_266f4c24998dcbaa73a388e0308c4d7b();
  });
}
