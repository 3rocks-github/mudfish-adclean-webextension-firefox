
function mudfish_adclean_a0e0e2980d45887ceea85d697c5f9349() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > .content_main > div[class^="main_top_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a0e0e2980d45887ceea85d697c5f9349();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a0e0e2980d45887ceea85d697c5f9349();
  });
}
