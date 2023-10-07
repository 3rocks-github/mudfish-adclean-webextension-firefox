
function mudfish_adclean_e3c2e734f2c4bf9e35dd378bf322722a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.wcms_bestnews ~ div[class]:has(~ div[class] ~ .side_major_company)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e3c2e734f2c4bf9e35dd378bf322722a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e3c2e734f2c4bf9e35dd378bf322722a();
  });
}
