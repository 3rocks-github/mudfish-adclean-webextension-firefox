
function mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mainContainer #content  .ct2 > section ~ *`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b();
  });
}
