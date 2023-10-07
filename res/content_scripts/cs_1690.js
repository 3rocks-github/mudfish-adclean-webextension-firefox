
function mudfish_adclean_63e714b2a5d7384309e91d22139c3825() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width][cellspacing][cellpadding][border] tr:not([height]) > td[width]:not([id]) ~ td[id]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_63e714b2a5d7384309e91d22139c3825();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_63e714b2a5d7384309e91d22139c3825();
  });
}
