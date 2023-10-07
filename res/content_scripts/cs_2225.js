
function mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`html:not([data-n-head]) .contents > .headline`).forEach(element => {
        element.style.marginTop = "0px !important";
element.style.height = "70px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_40b27c2f800c040e444d6e70d43b6a8e();
  });
}
