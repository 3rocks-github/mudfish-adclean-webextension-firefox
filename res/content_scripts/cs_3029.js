
function mudfish_adclean_2bff004585dbc2c82ac01142f3007d87() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#ySContent .loginCont`).forEach(element => {
        element.style.marginLeft = "200px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2bff004585dbc2c82ac01142f3007d87();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2bff004585dbc2c82ac01142f3007d87();
  });
}
