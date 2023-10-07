
function mudfish_adclean_e7230bd288f140b11dff3a6df84af9a3() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.mobile-main div[style^="padding:"].border-shadow`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_e7230bd288f140b11dff3a6df84af9a3();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_e7230bd288f140b11dff3a6df84af9a3();
  });
}
