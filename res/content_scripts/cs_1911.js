
function mudfish_adclean_c6d790c706332968d4c86be1d1b5993b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article > .article > div[class][style~="100%;"][style~="250px;"][style~="padding:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c6d790c706332968d4c86be1d1b5993b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c6d790c706332968d4c86be1d1b5993b();
  });
}
