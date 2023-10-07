
function mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#primary-content > .magic-item-w`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_5cce0fd4082e054a910ed084b7088b3c();
  });
}
