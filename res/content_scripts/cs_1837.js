
function mudfish_adclean_b4afedcde7360f2731989e44359ab97b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.main-evn > .main-visual`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b4afedcde7360f2731989e44359ab97b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b4afedcde7360f2731989e44359ab97b();
  });
}
