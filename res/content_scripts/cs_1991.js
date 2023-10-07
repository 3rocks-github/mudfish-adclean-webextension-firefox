
function mudfish_adclean_0920b0e74127b044c33d4690717f89cb() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#MM_aside_smartad_container`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0920b0e74127b044c33d4690717f89cb();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0920b0e74127b044c33d4690717f89cb();
  });
}
