
function mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[target="_blank"][href^="http://"].menu-a:contains(보증토토)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f9ebdfc9ad3053fb61d3d069dad81abe();
  });
}
