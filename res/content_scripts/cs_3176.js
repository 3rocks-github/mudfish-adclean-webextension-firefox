
function mudfish_adclean_a6d237984961355ce2a503d4919d33d0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src*=".imgbox.com/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a6d237984961355ce2a503d4919d33d0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a6d237984961355ce2a503d4919d33d0();
  });
}
