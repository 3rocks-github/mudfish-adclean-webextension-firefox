
function mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.ggb-bnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_b6513a0255e4c9094ff72ce63bbc0e52();
  });
}
