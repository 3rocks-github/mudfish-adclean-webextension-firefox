
function mudfish_adclean_318f2079504bd6c0e7ed822a838f697f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="/ad/"][target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_318f2079504bd6c0e7ed822a838f697f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_318f2079504bd6c0e7ed822a838f697f();
  });
}
