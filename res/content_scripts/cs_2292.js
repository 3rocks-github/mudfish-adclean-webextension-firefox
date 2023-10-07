
function mudfish_adclean_db373b5b2ecfee34afbeced81088ef0b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`li.area_guide`).forEach(element => {
        element.style.width = "96% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_db373b5b2ecfee34afbeced81088ef0b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_db373b5b2ecfee34afbeced81088ef0b();
  });
}
