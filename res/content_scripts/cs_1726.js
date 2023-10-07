
function mudfish_adclean_1d4e58d69f073c28cd2eebaa2041a3b1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.commu-content div[style].sh-wrap`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1d4e58d69f073c28cd2eebaa2041a3b1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1d4e58d69f073c28cd2eebaa2041a3b1();
  });
}
