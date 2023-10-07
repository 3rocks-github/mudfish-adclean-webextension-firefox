
function mudfish_adclean_6384464ecea47d179028d382681a3c67() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.flex-chain-wrapper[class*="-pad-top-"][class*="-margin-"][class*="-bg-grey-"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6384464ecea47d179028d382681a3c67();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6384464ecea47d179028d382681a3c67();
  });
}
