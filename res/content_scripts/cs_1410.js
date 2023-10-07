
function mudfish_adclean_2d023b0417ea5a45a5714ea5403136af() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.row > div[class][id=""] ~ #Contents ~ div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d023b0417ea5a45a5714ea5403136af();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d023b0417ea5a45a5714ea5403136af();
  });
}
