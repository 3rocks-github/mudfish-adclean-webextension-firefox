
function mudfish_adclean_899a5afbfb937816fdf46e1240f33076() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.aside-popular > ul.aside-popular-wrap > li > div[style~="300px;height:"][style~="block;width:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_899a5afbfb937816fdf46e1240f33076();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_899a5afbfb937816fdf46e1240f33076();
  });
}
