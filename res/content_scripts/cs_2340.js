
function mudfish_adclean_70a9d776b2308af4a24b6d13de04a067() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ebs_item .inner > div[class]`).forEach(element => {
        element.style.width = "50% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_70a9d776b2308af4a24b6d13de04a067();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_70a9d776b2308af4a24b6d13de04a067();
  });
}
