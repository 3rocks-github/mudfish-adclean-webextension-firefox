
function mudfish_adclean_12419f85d65dc60ce40f940e9f8f5ec2() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html[class*="pc-size"] .side-area + .m-guide`).forEach(element => {
        element.style.marginBottom = "150px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_12419f85d65dc60ce40f940e9f8f5ec2();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_12419f85d65dc60ce40f940e9f8f5ec2();
  });
}
