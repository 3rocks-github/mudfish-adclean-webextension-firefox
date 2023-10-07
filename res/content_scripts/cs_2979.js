
function mudfish_adclean_f0ce515ac506f42e91703e9216be1996() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`center + .bk20`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f0ce515ac506f42e91703e9216be1996();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f0ce515ac506f42e91703e9216be1996();
  });
}
