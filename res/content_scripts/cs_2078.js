
function mudfish_adclean_167c9b2cb11d8420ec181f27009b226f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.left_con_last`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_167c9b2cb11d8420ec181f27009b226f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_167c9b2cb11d8420ec181f27009b226f();
  });
}
