
function mudfish_adclean_03b51e71a5afd573e76e03aab6a6d170() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.banner_control_inner li[data-target="#75"].banner_group_item`).forEach(element => {
        element.style.remove = "true";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_03b51e71a5afd573e76e03aab6a6d170();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_03b51e71a5afd573e76e03aab6a6d170();
  });
}
