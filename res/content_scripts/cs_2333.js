
function mudfish_adclean_967184f3460dcec7db6d92e3b372e38c() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content-header form.FormItem`).forEach(element => {
        element.style.width = "100% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_967184f3460dcec7db6d92e3b372e38c();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_967184f3460dcec7db6d92e3b372e38c();
  });
}
