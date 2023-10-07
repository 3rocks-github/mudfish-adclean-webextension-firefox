
function mudfish_adclean_dec0eddac85882323f1a238c50dd674b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="http"][target="_blank"].thumbnail`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_dec0eddac85882323f1a238c50dd674b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_dec0eddac85882323f1a238c50dd674b();
  });
}
