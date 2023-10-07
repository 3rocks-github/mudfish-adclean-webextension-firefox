
function mudfish_adclean_b13fada2b244650d285da4f51540086f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.bot-content-area .mid-util-wrap > div`).forEach(element => {
        element.style.width = "calc(50% - 5px) !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b13fada2b244650d285da4f51540086f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b13fada2b244650d285da4f51540086f();
  });
}
