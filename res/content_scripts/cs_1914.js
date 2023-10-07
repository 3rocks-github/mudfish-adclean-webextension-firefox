
function mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#pnlContainer > div[class^="ct"] > .section > .ct_box > div[style~="text-align:"][style~="center;"][style~="padding:"][style~="10px"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f7ac297fdbac719bf8bd018331d5270a();
  });
}
