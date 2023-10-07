
function mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.productSortingList > .listTitle:has(a[aria-describedby^="adLayerChoice"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6487b94e1f77d0fe85895deafdd0ea76();
  });
}
