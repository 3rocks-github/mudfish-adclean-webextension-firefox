
function mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#container #content > .gradation_area`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1e5bc8a3780bc8199bdb29f3fcb0ff0e();
  });
}
