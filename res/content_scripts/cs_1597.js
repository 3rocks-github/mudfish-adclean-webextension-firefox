
function mudfish_adclean_d215108b961223464ce792b7f7647de1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul#_dealListContainer.list > li.item.type_admon[data-maincategoryno]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d215108b961223464ce792b7f7647de1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d215108b961223464ce792b7f7647de1();
  });
}
