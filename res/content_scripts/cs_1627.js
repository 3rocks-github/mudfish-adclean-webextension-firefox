
function mudfish_adclean_d517c81c4eb9e29088cb1dbafb9867d1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mtop_adfit`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d517c81c4eb9e29088cb1dbafb9867d1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d517c81c4eb9e29088cb1dbafb9867d1();
  });
}
