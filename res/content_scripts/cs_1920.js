
function mudfish_adclean_e2b98fea8287525223a4312124ff1b0e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.top_area > .wrap_sl_item > .slick-slider`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e2b98fea8287525223a4312124ff1b0e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e2b98fea8287525223a4312124ff1b0e();
  });
}
