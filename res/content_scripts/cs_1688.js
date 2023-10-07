
function mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class~="hospital-images-box"] ~ .row > .col-4`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bafaa71326e2c9d91c9559a55ad5230d();
  });
}
