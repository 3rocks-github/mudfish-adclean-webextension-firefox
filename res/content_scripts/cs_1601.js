
function mudfish_adclean_f1b2726ac9ce4e8826548f171227908f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#r_aside > center > .bn`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f1b2726ac9ce4e8826548f171227908f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f1b2726ac9ce4e8826548f171227908f();
  });
}
