
function mudfish_adclean_064f3683cdb06850fcb30e0d3ce895c6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.sect-movie-chart > ol:nth-child(2) > li`).forEach(element => {
        element.style.marginLeft = "130px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_064f3683cdb06850fcb30e0d3ce895c6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_064f3683cdb06850fcb30e0d3ce895c6();
  });
}
