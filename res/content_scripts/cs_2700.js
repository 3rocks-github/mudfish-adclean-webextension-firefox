
function mudfish_adclean_04d15fb5edc44c050051b3aa4717675a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-slot-type="IMAGE_BIG_BANNER"].box_bnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_04d15fb5edc44c050051b3aa4717675a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_04d15fb5edc44c050051b3aa4717675a();
  });
}
