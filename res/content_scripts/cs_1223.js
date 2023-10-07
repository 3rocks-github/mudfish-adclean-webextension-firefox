
function mudfish_adclean_61afbd7c25560354e444313d3d45519e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.respons-edit > div[style^="width:"].float-right`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_61afbd7c25560354e444313d3d45519e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_61afbd7c25560354e444313d3d45519e();
  });
}
