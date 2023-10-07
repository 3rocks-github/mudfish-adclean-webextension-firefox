
function mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#pnlContainer .con_b >.ct_box:not([style])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_27aca48b984e0968e8f0ec864b4fcf9f();
  });
}
