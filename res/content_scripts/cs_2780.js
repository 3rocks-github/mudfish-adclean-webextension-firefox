
function mudfish_adclean_d3668cdae4e43127c3e9893e452b6607() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#home-sidebar >  a[target="_blank"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d3668cdae4e43127c3e9893e452b6607();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d3668cdae4e43127c3e9893e452b6607();
  });
}
