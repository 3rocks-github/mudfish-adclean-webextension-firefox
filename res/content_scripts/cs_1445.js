
function mudfish_adclean_65c124ae67d589bbc9872d94cc7ca860() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class^="box__layer-"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_65c124ae67d589bbc9872d94cc7ca860();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_65c124ae67d589bbc9872d94cc7ca860();
  });
}
