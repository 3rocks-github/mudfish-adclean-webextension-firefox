
function mudfish_adclean_fe59eae2a1282c67d9d3fb579d7d1ba1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.MuiGrid-item button[style^="background-color:"].MuiButtonBase-root`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_fe59eae2a1282c67d9d3fb579d7d1ba1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_fe59eae2a1282c67d9d3fb579d7d1ba1();
  });
}
