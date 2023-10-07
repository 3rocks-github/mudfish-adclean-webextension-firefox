
function mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-sticky].sticky > .side-panel`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_859127e2f78eb97d0dab0ff1424d9915();
  });
}
