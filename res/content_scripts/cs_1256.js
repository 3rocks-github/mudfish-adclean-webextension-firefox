
function mudfish_adclean_a67fe81d94ebbdd5444c0f56ed90a317() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`center + .bk40`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a67fe81d94ebbdd5444c0f56ed90a317();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a67fe81d94ebbdd5444c0f56ed90a317();
  });
}
