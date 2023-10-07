
function mudfish_adclean_bc90905555309caba1951c538354b1bd() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#article-view-content-div div[class$="-banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bc90905555309caba1951c538354b1bd();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bc90905555309caba1951c538354b1bd();
  });
}
