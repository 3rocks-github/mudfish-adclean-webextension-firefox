
function mudfish_adclean_56d6d0598f28402ebd9506c0700b1ce0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//nad.tf.co.kr/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_56d6d0598f28402ebd9506c0700b1ce0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_56d6d0598f28402ebd9506c0700b1ce0();
  });
}
