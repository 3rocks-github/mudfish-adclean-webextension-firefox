
function mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.cont-row > div[class^="cont-item"] > .detail-rel`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_64df2eb06cb638b78ba82c62e60984a0();
  });
}
