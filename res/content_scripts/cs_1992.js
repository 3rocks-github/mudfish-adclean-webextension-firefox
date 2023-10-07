
function mudfish_adclean_6c07405d9e107b23b9746d8d643287ac() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href^="https://www.dothome.co.kr/ad/"][target="new"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6c07405d9e107b23b9746d8d643287ac();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6c07405d9e107b23b9746d8d643287ac();
  });
}
