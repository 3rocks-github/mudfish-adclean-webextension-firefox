
function mudfish_adclean_2933d7ce10d1955eee3389d566563cf6() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.quiz_list:not([style]) ~  .result_wrap .restart`).forEach(element => {
        element.style.display = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2933d7ce10d1955eee3389d566563cf6();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2933d7ce10d1955eee3389d566563cf6();
  });
}
