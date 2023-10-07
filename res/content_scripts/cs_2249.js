
function mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#body > .hp_allkill`).forEach(element => {
        element.style.marginTop = "375px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354();
  });
}
