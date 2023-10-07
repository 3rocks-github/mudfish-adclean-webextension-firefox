
function mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content_list.search > div[class^="list_center_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db();
  });
}
