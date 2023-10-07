
function mudfish_adclean_8f90f3ed8f3d6b62a179eaa946293e2f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article[id$="_banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8f90f3ed8f3d6b62a179eaa946293e2f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8f90f3ed8f3d6b62a179eaa946293e2f();
  });
}
