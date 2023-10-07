
function mudfish_adclean_f20082f90d6cef9421c55d37d33d3d7a() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[style].row.no-gutters > .col-6`).forEach(element => {
        element.style.maxWidth = "75% !important";
element.style.flexBasis = "75% !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_f20082f90d6cef9421c55d37d33d3d7a();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_f20082f90d6cef9421c55d37d33d3d7a();
  });
}
