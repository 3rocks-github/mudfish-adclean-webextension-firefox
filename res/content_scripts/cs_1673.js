
function mudfish_adclean_f7b7fb14651b924b3adb3953e93c45ff() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#main_visual`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f7b7fb14651b924b3adb3953e93c45ff();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f7b7fb14651b924b3adb3953e93c45ff();
  });
}
