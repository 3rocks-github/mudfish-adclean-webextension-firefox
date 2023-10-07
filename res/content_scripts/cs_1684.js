
function mudfish_adclean_8675056e41d8e9ac3058c78c272afd55() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.news-cont ~ .news-special`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8675056e41d8e9ac3058c78c272afd55();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8675056e41d8e9ac3058c78c272afd55();
  });
}
