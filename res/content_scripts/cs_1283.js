
function mudfish_adclean_2f25ce0a86951b0c475ec5b12b7e3e15() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_content > div[id$="_content"][class^="content_"] div[class^="post_"] > div[class^="view_center_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2f25ce0a86951b0c475ec5b12b7e3e15();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2f25ce0a86951b0c475ec5b12b7e3e15();
  });
}
