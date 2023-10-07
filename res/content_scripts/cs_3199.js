
function mudfish_adclean_2121afc208d17621f573e64d344f9244() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.td-pb-span8`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2121afc208d17621f573e64d344f9244();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2121afc208d17621f573e64d344f9244();
  });
}
