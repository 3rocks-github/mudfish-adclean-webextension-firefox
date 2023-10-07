
function mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*="-ContentSections"] div[class^="css-"] section:has(section[class*="-ContentSection"] div[class*="-AdContainer"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2d3ffd55831b221223b585d7dcbd85c3();
  });
}
