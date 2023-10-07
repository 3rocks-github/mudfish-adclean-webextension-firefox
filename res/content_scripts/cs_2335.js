
function mudfish_adclean_7422ae31177719728ace6694b1510f25() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class~="hospital-images-box"] ~ .row > .col-8`).forEach(element => {
        element.style.maxWidth = "100% !important";
element.style.flex = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7422ae31177719728ace6694b1510f25();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7422ae31177719728ace6694b1510f25();
  });
}
