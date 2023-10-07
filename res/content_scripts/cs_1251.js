
function mudfish_adclean_7172633274f258233efbb0094fa546a7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#secondary > aside#search-4 ~ aside`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7172633274f258233efbb0094fa546a7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7172633274f258233efbb0094fa546a7();
  });
}
