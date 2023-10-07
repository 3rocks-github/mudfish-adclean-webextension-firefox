
function mudfish_adclean_10a1a3e532145d626c779d4894ce3d69() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.result_wrap`).forEach(element => {
        element.style.display = "block !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_10a1a3e532145d626c779d4894ce3d69();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_10a1a3e532145d626c779d4894ce3d69();
  });
}
