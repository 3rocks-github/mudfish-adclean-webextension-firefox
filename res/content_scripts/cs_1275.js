
function mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nav_container > .content_view_list > div[class^="list_bottom_"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8();
  });
}
