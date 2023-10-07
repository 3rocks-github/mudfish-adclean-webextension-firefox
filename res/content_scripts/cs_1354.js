
function mudfish_adclean_6028c47f9894757af6a4d4e9fff09538() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.da_login-phone`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6028c47f9894757af6a4d4e9fff09538();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6028c47f9894757af6a4d4e9fff09538();
  });
}
