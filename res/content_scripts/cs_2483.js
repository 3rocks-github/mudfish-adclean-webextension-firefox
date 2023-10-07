
function mudfish_adclean_de430149ca365bd1ff4788b962b27d4d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.table-stripped tr:has(.ad)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_de430149ca365bd1ff4788b962b27d4d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_de430149ca365bd1ff4788b962b27d4d();
  });
}
