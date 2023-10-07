
function mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mounted .cont_wrap .right_area > div:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b955948fa822cb42fbdb1ea4bfc031f0();
  });
}
