
function mudfish_adclean_01d41186df5ea70aa783a6cba85cde47() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main_contents > div[class^="sc-"]:has(img[src*="//cdnimg.happyshopping.kr/img_ad/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_01d41186df5ea70aa783a6cba85cde47();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_01d41186df5ea70aa783a6cba85cde47();
  });
}
