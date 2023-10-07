
function mudfish_adclean_a02bdd35d0e469b3eecc605d144eb110() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.group-deal .list > div:has(span.ad:matches-css(background-image: /images\/deal\/ad\.png/))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a02bdd35d0e469b3eecc605d144eb110();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a02bdd35d0e469b3eecc605d144eb110();
  });
}
