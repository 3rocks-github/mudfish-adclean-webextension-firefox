
function mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.gall_list .ub-content:not(.us-post):has(a[href*="//addc.dcinside.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_289e8ecdee10572308a95149ee8d0e8f();
  });
}
