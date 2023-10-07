
function mudfish_adclean_39ad89d8b43e0a5b7ceaa98953389dae() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`form[name="loginForm"][action*="login.yp"] > table`).forEach(element => {
        element.style.marginLeft = "calc(25% - 27px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_39ad89d8b43e0a5b7ceaa98953389dae();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_39ad89d8b43e0a5b7ceaa98953389dae();
  });
}
