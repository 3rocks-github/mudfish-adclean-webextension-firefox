
function mudfish_adclean_f349ce775335b7235aef9333d4da1af4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.content .left-wing > div`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f349ce775335b7235aef9333d4da1af4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f349ce775335b7235aef9333d4da1af4();
  });
}
