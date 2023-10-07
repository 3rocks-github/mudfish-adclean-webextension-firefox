
function mudfish_adclean_52902f29a7e7e8568e27295fbd339689() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main_right > .reward_v2`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_52902f29a7e7e8568e27295fbd339689();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_52902f29a7e7e8568e27295fbd339689();
  });
}
