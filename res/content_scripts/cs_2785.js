
function mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="obx_foodname_goods"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb();
  });
}
