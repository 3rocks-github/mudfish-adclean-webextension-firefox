
function mudfish_adclean_605d5c7be362642d9e50d521a84bd93b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.productSortingList > .choice`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_605d5c7be362642d9e50d521a84bd93b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_605d5c7be362642d9e50d521a84bd93b();
  });
}
