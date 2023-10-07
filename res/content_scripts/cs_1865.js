
function mudfish_adclean_a560244b817bf1f069e7943383c2b0d9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content > .sub_content > .board_view >  div[align="center"]:not([class]):not([id]):not([style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a560244b817bf1f069e7943383c2b0d9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a560244b817bf1f069e7943383c2b0d9();
  });
}
