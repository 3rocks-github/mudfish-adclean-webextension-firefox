
function mudfish_adclean_e0e4c07514ed63e324f4544803cd5b6d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`article.layout__article-main > .box--pad-top-md`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e0e4c07514ed63e324f4544803cd5b6d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e0e4c07514ed63e324f4544803cd5b6d();
  });
}
