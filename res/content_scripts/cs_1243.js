
function mudfish_adclean_3a9825477391d7eb6c4640c6f6e3243a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[id^="dont"][style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_3a9825477391d7eb6c4640c6f6e3243a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_3a9825477391d7eb6c4640c6f6e3243a();
  });
}
