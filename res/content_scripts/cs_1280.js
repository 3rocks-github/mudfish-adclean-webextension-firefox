
function mudfish_adclean_7533f71ebb8fd33cf13a4a8f969042d7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > .content_main > div[class^="main_center_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7533f71ebb8fd33cf13a4a8f969042d7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7533f71ebb8fd33cf13a4a8f969042d7();
  });
}
