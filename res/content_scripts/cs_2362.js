
function mudfish_adclean_c9297b865cbb7abc0cd2a462ce89af77() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`body`).forEach(element => {
        element.style.overflowX = "auto !important";
element.style.overflowY = "auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c9297b865cbb7abc0cd2a462ce89af77();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c9297b865cbb7abc0cd2a462ce89af77();
  });
}
