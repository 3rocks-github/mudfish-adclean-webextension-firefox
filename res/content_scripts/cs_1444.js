
function mudfish_adclean_88506b73772172b35b16604fee19436f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class$="-togetheritems"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_88506b73772172b35b16604fee19436f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_88506b73772172b35b16604fee19436f();
  });
}
