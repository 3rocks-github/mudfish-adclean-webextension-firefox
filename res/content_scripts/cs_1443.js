
function mudfish_adclean_e7795759d87fea40ee76502b1531be37() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.section__main-inner > .box__promotion .box__item > *`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e7795759d87fea40ee76502b1531be37();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e7795759d87fea40ee76502b1531be37();
  });
}
