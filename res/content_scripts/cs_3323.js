
function mudfish_adclean_49f9a75aa2be6a0c0973686312360578() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#slrcf > .cl_spc`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_49f9a75aa2be6a0c0973686312360578();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_49f9a75aa2be6a0c0973686312360578();
  });
}
