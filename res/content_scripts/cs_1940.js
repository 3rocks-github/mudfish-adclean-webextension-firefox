
function mudfish_adclean_a572ab0f5f1b3833aac1af2797f64a56() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//www.etnews.com/tools/refresh_script.html?"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a572ab0f5f1b3833aac1af2797f64a56();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a572ab0f5f1b3833aac1af2797f64a56();
  });
}
