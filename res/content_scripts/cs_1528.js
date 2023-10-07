
function mudfish_adclean_6944ba780de79e9dc7973ac8ecc161ee() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="-grey-"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6944ba780de79e9dc7973ac8ecc161ee();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6944ba780de79e9dc7973ac8ecc161ee();
  });
}
