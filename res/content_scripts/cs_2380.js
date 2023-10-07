
function mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#header`).forEach(element => {
        element.style.height = "100px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473();
  });
}
