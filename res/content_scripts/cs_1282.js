
function mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > div[id$="_content"][class^="content_"] .section_list.notice > div[class^="main_top_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e();
  });
}
