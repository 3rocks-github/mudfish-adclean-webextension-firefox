
function mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id*="_right_list_"] ~ div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c();
  });
}
