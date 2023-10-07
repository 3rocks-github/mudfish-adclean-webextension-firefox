
function mudfish_adclean_b3f72354d39ea72eb63c8881b4d0342e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.swiper-slide-active .part-visible-normal:has(img[src*="//static.marketinven.com/data/brand/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b3f72354d39ea72eb63c8881b4d0342e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b3f72354d39ea72eb63c8881b4d0342e();
  });
}
