
function mudfish_adclean_d6166ee4924283c52116256ec46050da() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header-menu-left`).forEach(element => {
        element.style.borderRight = "none !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d6166ee4924283c52116256ec46050da();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d6166ee4924283c52116256ec46050da();
  });
}
