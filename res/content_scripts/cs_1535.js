
function mudfish_adclean_165d9aae072e0943a9719d19ace44263() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.bnr_area a[target]:not([href*="//realty.chosun.com/"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_165d9aae072e0943a9719d19ace44263();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_165d9aae072e0943a9719d19ace44263();
  });
}
