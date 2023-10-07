
function mudfish_adclean_2696cc937bf9cffb22efe4b292e7a68c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`header .row[style]`).forEach(element => {
        element.style.marginBottom = "35px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2696cc937bf9cffb22efe4b292e7a68c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2696cc937bf9cffb22efe4b292e7a68c();
  });
}
